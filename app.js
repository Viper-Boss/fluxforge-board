"use strict";
(async () => {
  let data = window.FLUXFORGE_DATA;
  let loadWarning = "";
  // Read only the public snapshot. A fresh URL avoids GitHub Pages/CDN and
  // browser caches retaining yesterday's data.js after a successful publish.
  if (window.location.protocol === "https:" || window.location.protocol === "http:") {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch("snapshot.json?checked=" + Date.now(), {cache:"no-store", signal:controller.signal});
      if (!response.ok) throw new Error("snapshot unavailable");
      const fresh = await response.json();
      if (fresh.schema_version !== 1 || !Array.isArray(fresh.pull_requests)) throw new Error("invalid snapshot");
      data = fresh;
    } catch {
      loadWarning = "网络刷新未成功，当前显示已归档快照；请核对更新时间。";
    } finally {
      clearTimeout(timeout);
    }
  }
  const $ = id => document.getElementById(id);
  const node = (tag, cls, text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = String(text);
    return el;
  };
  const number = value => Number(value).toLocaleString("zh-CN");
  const date = (value, mode = "full") => {
    if (!value || !Number.isFinite(Date.parse(value))) return "—";
    const fields = {timeZone:"Asia/Shanghai", hour12:false};
    if (mode !== "time") Object.assign(fields, {year:"numeric", month:"2-digit", day:"2-digit"});
    if (mode !== "day") Object.assign(fields, {hour:"2-digit", minute:"2-digit"});
    return new Intl.DateTimeFormat("zh-CN", fields).format(new Date(value));
  };
  const link = (text, url, cls = "") => {
    const el = node("a", cls, text);
    try {
      const parsed = new URL(url);
      if (parsed.protocol === "https:" && parsed.hostname === "github.com"
          && parsed.pathname.startsWith("/Viper-Boss/fluxforge-mfl/")) {
        el.href = parsed.href;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    } catch { /* Invalid external data stays as plain text. */ }
    return el;
  };
  const progress = (label, value) => {
    const rail = node("div", "track");
    const clamped = Math.max(0, Math.min(100, Number(value) || 0));
    rail.setAttribute("role", "progressbar");
    rail.setAttribute("aria-label", label);
    rail.setAttribute("aria-valuemin", "0");
    rail.setAttribute("aria-valuemax", "100");
    rail.setAttribute("aria-valuenow", String(clamped));
    const fill = node("i");
    fill.style.width = clamped + "%";
    rail.append(fill);
    return rail;
  };
  if (!data || data.schema_version !== 1 || !Array.isArray(data.pull_requests)) {
    $("generated").textContent = "数据未载入，请刷新或联系维护者";
    return;
  }
  let visible = 10;
  $("generated").textContent = date(data.generated_at);
  $("generated").dateTime = data.generated_at;
  $("stale").hidden = Date.now() - Date.parse(data.generated_at) <= 48 * 3600 * 1000;
  if (loadWarning) {
    $("stale").textContent = loadWarning;
    $("stale").hidden = false;
  }
  $("overall").replaceChildren(document.createTextNode(String(data.overall_progress)), node("small", "", "%"));
  $("gauge").style.setProperty("--amount", data.overall_progress + "%");
  $("gauge").setAttribute("role", "progressbar");
  $("gauge").setAttribute("aria-label", "总体工作量粗估");
  $("gauge").setAttribute("aria-valuemin", "0");
  $("gauge").setAttribute("aria-valuemax", "100");
  $("gauge").setAttribute("aria-valuenow", String(data.overall_progress));
  $("code-total").textContent = number(data.code_lines);
  $("code-estimate").textContent = "预估 " + number(data.code_target) + " 行 · 约 " + data.code_progress + "%";
  $("total-code-track").setAttribute("aria-valuenow", String(data.code_progress));
  $("total-code-track").firstElementChild.style.width = data.code_progress + "%";
  $("open-total").textContent = data.open_count;
  $("merged-total").textContent = data.merged_count;
  $("last-day").textContent = date(data.last_submitted_at, "day");
  $("last-time").textContent = date(data.last_submitted_at, "time") + " · GitHub PR 创建时间";
  $("privacy").textContent = data.privacy;
  $("estimate-date").textContent = data.estimate_date;
  $("main-sha").textContent = data.main_sha.slice(0, 7);
  $("refresh").addEventListener("click", () => window.location.reload());

  for (const member of data.members) {
    const card = node("article", "member " + member.color);
    const top = node("div", "member-top");
    const identity = node("div", "identity");
    const names = node("div");
    names.append(node("h3", "", member.name), node("p", "", member.role));
    identity.append(node("span", "avatar", member.initials), names);
    const allocation = node("div", "allocation", "预计工作量占比");
    allocation.append(node("strong", "", member.allocation + "%"));
    top.append(identity, allocation);
    card.append(top, node("p", "responsibility", member.responsibilities));
    const work = node("div", "progress-group");
    const workLabel = node("div", "progress-label");
    workLabel.append(node("span", "", "负责工作完成度 · 粗估"), node("strong", "", "约 " + member.progress + "%"));
    work.append(workLabel, progress(member.name + " 工作量粗估", member.progress));
    const code = node("div", "code-progress");
    const codeLabel = node("div", "progress-label");
    if (member.code_target) {
      codeLabel.append(node("span", "", "产品代码量 · 估算"), node("strong", "", member.code_progress + "%"));
      code.append(codeLabel, progress(member.name + " 代码量估算", member.code_progress),
        node("p", "progress-sub", number(member.code_lines) + " / 预计 " + number(member.code_target) + " 非空行"));
    } else {
      codeLabel.append(node("span", "", "业务代码量"), node("strong", "", "不设配额"));
      code.append(codeLabel, node("div", "not-applicable"),
        node("p", "progress-sub", "主线已归档审核 / 指挥文档 " + data.review_documents + " 份"));
    }
    card.append(work, code);
    const active = data.pull_requests.find(pr => pr.author === member.login && pr.state === "open");
    const status = node("div", "member-status " + (active ? active.review.state : ""));
    status.textContent = active ? "PR #" + active.number + " · " + active.review.label : "持续推进 · " + member.open_count + " 条开放 PR";
    card.append(status);
    const next = node("div", "next");
    next.append(node("span", "", "下一步 / "), document.createTextNode(member.next));
    const meta = node("div", "member-meta", "最近 PR 提交：");
    const submitted = node("time", "", date(member.last_submitted_at));
    if (member.last_submitted_at) submitted.dateTime = member.last_submitted_at;
    meta.append(submitted);
    const details = node("details", "task-detail");
    details.append(node("summary", "", "展开负责的任务与工作量口径"));
    const tasks = node("ul");
    for (const task of member.tasks) {
      const item = node("li");
      const row = node("div");
      row.append(link(task.id + " · " + task.title, "https://github.com/" + data.repository + "/issues/" + task.issue),
        node("span", "", task.progress + "%"));
      item.append(row, node("p", "", "任务权重 " + task.weight + "%" + (task.note ? " · " + task.note : "")));
      tasks.append(item);
    }
    details.append(tasks);
    card.append(next, meta, details);
    $("members").append(card);
  }

  function openReview(pr) {
    const dialog = $("review-dialog");
    $("dialog-title").textContent = "#" + pr.number + " · " + pr.title;
    const content = $("dialog-content");
    const review = pr.review;
    content.replaceChildren(node("span", "pill " + review.state, review.label));
    if (review.scope) content.append(node("p", "scope", "审核范围：" + review.scope));
    content.append(node("p", "", review.summary));
    const info = node("dl");
    const pairs = [
      ["提交成员", pr.author], ["PR 提交", date(pr.created_at)], ["PR 最近更新", date(pr.updated_at)],
      ["当前代码 HEAD", pr.head], ["GitHub 状态", pr.state === "merged" ? "已合并" : pr.state === "closed" ? "已关闭未合并" : pr.draft ? "开放草稿" : "开放"]
    ];
    if (pr.merged_at) pairs.push(["合并时间", date(pr.merged_at)]);
    if (review.previous_head) pairs.push(["旧审核 HEAD", review.previous_head]);
    if (review.reviewed_date) pairs.push(["审核记录日期", review.reviewed_date]);
    for (const [label, value] of pairs) info.append(node("dt", "", label), node("dd", "", value));
    const links = node("div", "dialog-links");
    links.append(link("打开原始 PR ↗", pr.url, "secondary"));
    if (review.report) links.append(link("查看详细审核 MD ↗", "https://github.com/" + data.repository + "/blob/main/" + review.report, "secondary"));
    if (review.comment) links.append(link("查看审核意见 ↗", review.comment, "secondary"));
    content.append(info, links, node("p", "dialog-note", "时间均为北京时间。原始 PR 与审核文档需要私有仓库访问权限；本页只公开摘要。"));
    dialog.showModal();
  }

  function matchesReview(pr, state) {
    if (state === "all") return true;
    if (state === "accepted") return ["accepted", "stage_accepted"].includes(pr.review.state);
    if (state === "pending") return ["pending", "needs_re_review"].includes(pr.review.state);
    return pr.review.state === state;
  }

  function renderRows() {
    const who = $("member-filter").value;
    const state = $("review-filter").value;
    const query = $("search").value.trim().toLowerCase();
    const filtered = data.pull_requests.filter(pr => (who === "all" || pr.author === who)
      && matchesReview(pr, state)
      && (pr.title + " " + pr.number + " " + pr.author + " " + pr.review.label).toLowerCase().includes(query));
    $("rows").replaceChildren();
    for (const pr of filtered.slice(0, visible)) {
      const row = node("tr");
      const timeCell = node("td", "pr-date", date(pr.created_at, "day"));
      timeCell.append(node("small", "", date(pr.created_at, "time")));
      const person = node("td");
      const author = node("span", "author " + pr.author);
      author.append(node("i"), document.createTextNode(pr.author));
      person.append(author);
      const titleCell = node("td");
      const title = link("", pr.url, "pr-title");
      title.append(node("small", "", "#" + pr.number), document.createTextNode(pr.title));
      titleCell.append(title, node("div", "pr-head", "HEAD " + pr.head.slice(0, 7)));
      const stateCell = node("td");
      stateCell.append(node("span", "pill " + pr.state,
        pr.state === "merged" ? "已合并" : pr.state === "closed" ? "已关闭" : pr.draft ? "开放 · 草稿" : "开放"));
      const reviewCell = node("td");
      reviewCell.append(node("span", "pill " + pr.review.state, pr.review.label));
      const actionCell = node("td");
      const button = node("button", "opinion", "查看意见 ↗");
      button.type = "button";
      button.setAttribute("aria-label", "查看 PR " + pr.number + " 的审核意见");
      button.addEventListener("click", () => openReview(pr));
      actionCell.append(button);
      row.append(timeCell, person, titleCell, stateCell, reviewCell, actionCell);
      $("rows").append(row);
    }
    $("empty").hidden = filtered.length !== 0;
    $("more").hidden = visible >= filtered.length;
    const shown = Math.min(visible, filtered.length);
    $("shown-count").textContent = "显示 " + shown + " / " + filtered.length + " 条";
    $("list-summary").textContent = "按 PR 创建时间排序 · " + shown + " / " + filtered.length + " 条主线记录";
  }
  for (const id of ["member-filter", "review-filter", "search"]) {
    $(id).addEventListener(id === "search" ? "input" : "change", () => { visible = 10; renderRows(); });
  }
  $("reset").addEventListener("click", () => {
    $("member-filter").value = "all";
    $("review-filter").value = "all";
    $("search").value = "";
    visible = 10;
    renderRows();
  });
  $("more").addEventListener("click", () => { visible += 10; renderRows(); });
  $("close-dialog").addEventListener("click", () => $("review-dialog").close());
  $("review-dialog").addEventListener("click", event => {
    if (event.target === $("review-dialog")) {
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
    }
  });
  renderRows();
})();
