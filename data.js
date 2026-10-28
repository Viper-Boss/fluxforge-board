window.FLUXFORGE_DATA = {
  "schema_version": 1,
  "repository": "Viper-Boss/fluxforge-mfl",
  "generated_at": "2026-10-28T18:15:05Z",
  "main_sha": "8dca9ae90e3ab8daf6e2dd1dffd307a6ddbde58b",
  "estimate_date": "2026-10-26",
  "estimate_note": "工作量为指挥按任务实际覆盖范围作出的粗估，取整到5%；已提交PR按其实际实现覆盖计入，不要求先审核或合并，但不等于验收通过。2026-10-29依据PR85/86/84的代码与任务交付，将F02-R2/B02/B04分别调整为60/75/70；剩余真实GUI接收、目标环境及完整任务项仍待。代码量为main指定产品非空行/预估规模，均非验收率或实测工时。",
  "exclusion_note": "排除GLM/Claude平行实现和独立美学参考提案；不以它们增加主线进度。",
  "overall_progress": 55,
  "code_lines": 7588,
  "code_target": 16500,
  "code_progress": 46,
  "review_documents": 64,
  "open_count": 3,
  "merged_count": 48,
  "last_submitted_at": "2026-10-28T13:40:40Z",
  "members": [
    {
      "login": "fungi1220",
      "name": "fungi1220",
      "role": "前端与科研交互",
      "initials": "F",
      "color": "mint",
      "allocation": 45,
      "responsibilities": "Rust 原生界面、波形与热图、ROI 圈选、项目标注、结果与导出",
      "next": "按现有I00接F02-R2真实MAT导入；DPI等缺项继续。",
      "code_target": 8000,
      "tasks": [
        {
          "id": "F01",
          "title": "SCI 全页原型与交互收尾",
          "weight": 30,
          "progress": 80,
          "note": "原型/键盘及PR74菜单焦点修复已本人本批接收；真实系统DPI与完整交互缺项继续。",
          "issue": 12
        },
        {
          "id": "F02-R1",
          "title": "缓存驱动波形、热图与 ROI",
          "weight": 20,
          "progress": 70,
          "note": "PR76缓存fixture/波形/热图/ROI及取消恢复本批接收；系统DPI、最小窗口、性能和双方交接仍待。",
          "issue": 13
        },
        {
          "id": "F02-R2",
          "title": "真实 MAT 导入与诊断",
          "weight": 10,
          "progress": 60,
          "note": "PR85提交MAT导入向导、诊断与typed worker前端接线，按实际覆盖计入；接收方真实GUI联调及完整导入流程仍待。",
          "issue": 13
        },
        {
          "id": "F03",
          "title": "项目、标注与恢复",
          "weight": 15,
          "progress": 0,
          "issue": 14
        },
        {
          "id": "F04",
          "title": "任务接线与真实结果图",
          "weight": 10,
          "progress": 0,
          "issue": 15
        },
        {
          "id": "F05",
          "title": "导出与完整体验",
          "weight": 10,
          "progress": 0,
          "issue": 16
        },
        {
          "id": "F06",
          "title": "获批扩展功能",
          "weight": 5,
          "progress": 0,
          "issue": 17
        }
      ],
      "progress": 45,
      "code_lines": 2515,
      "code_progress": 31,
      "last_submitted_at": "2026-10-28T09:05:15Z",
      "last_updated_at": "2026-10-28T15:21:26Z",
      "pr_count": 6,
      "open_count": 1
    },
    {
      "login": "yh1030",
      "name": "yh1030",
      "role": "计算核心与进程桥",
      "initials": "Y",
      "color": "lavender",
      "allocation": 45,
      "responsibilities": "MATLAB 核查、无界面计算、共享协议、Compiler worker、Rust 桥接",
      "next": "I00回应/组合验证已接收，支持F02-R2接线，准备B03-P1具体提案。",
      "code_target": 8500,
      "tasks": [
        {
          "id": "B01",
          "title": "老师源码与模型核查",
          "weight": 15,
          "progress": 65,
          "note": "工具和技术证据已接收，完整 golden 与物理基准待确认。",
          "issue": 18
        },
        {
          "id": "B02",
          "title": "数据契约与实际浏览接线",
          "weight": 20,
          "progress": 75,
          "note": "已接收PR70/75/79；PR86提交PR85真实worker交接及跨层场景，按实际覆盖计入但未验收；接收方下载核SHA与GUI实测仍待。",
          "issue": 19
        },
        {
          "id": "B03",
          "title": "无界面核心与数值正确性",
          "weight": 25,
          "progress": 60,
          "note": "技术核心阶段接收，正式分析接口与物理有效性未完成。",
          "issue": 20
        },
        {
          "id": "B04",
          "title": "Compiler 与目标部署",
          "weight": 15,
          "progress": 70,
          "note": "已接收PR77及目标机A组证据；PR84提交B/C与Runtime回传自动化、真实Runtime对照和局部修正，按实际覆盖计入但未验收；B/C缺错环境与Runtime-only独立证明仍待。",
          "issue": 21
        },
        {
          "id": "B05",
          "title": "进程桥、故障恢复与交接",
          "weight": 20,
          "progress": 60,
          "note": "typed桥和诊断阶段接收；历史超时/耗时波动、真实UI任务接线仍待。",
          "issue": 22
        },
        {
          "id": "B06",
          "title": "扩展预检与获批扩展",
          "weight": 5,
          "progress": 20,
          "note": "仅预检交付，不等于扩展业务已实现。",
          "issue": 23
        }
      ],
      "progress": 65,
      "code_lines": 5073,
      "code_progress": 60,
      "last_submitted_at": "2026-10-28T13:40:40Z",
      "last_updated_at": "2026-10-28T17:58:15Z",
      "pr_count": 17,
      "open_count": 2
    },
    {
      "login": "Viper-Boss",
      "name": "Viper-Boss",
      "role": "总指挥与验收",
      "initials": "V",
      "color": "gold",
      "allocation": 10,
      "responsibilities": "任务拆解、方向制定、代码与视觉验收、老师沟通、授权和最终打包",
      "next": "持续审核两人交付；裁决物理与协议关键项，组织最终用户验收。",
      "code_target": null,
      "tasks": [
        {
          "id": "V01-A",
          "title": "技术路线、分工与任务书",
          "weight": 20,
          "progress": 100,
          "issue": 24
        },
        {
          "id": "V01-R",
          "title": "持续审核与阶段接收",
          "weight": 20,
          "progress": 75,
          "note": "已接收多批交付；最终整体审核仍持续。",
          "issue": 24
        },
        {
          "id": "V01-P",
          "title": "老师确认与物理基准裁决",
          "weight": 20,
          "progress": 0,
          "issue": 24
        },
        {
          "id": "V01-L",
          "title": "最终构建授权与环境确认",
          "weight": 10,
          "progress": 0,
          "issue": 24
        },
        {
          "id": "V02-P",
          "title": "最终打包与安装验收",
          "weight": 20,
          "progress": 0,
          "issue": 25
        },
        {
          "id": "V02-A",
          "title": "完整用户验收与发布决定",
          "weight": 10,
          "progress": 0,
          "issue": 25
        }
      ],
      "progress": 35,
      "code_lines": null,
      "code_progress": null,
      "last_submitted_at": "2026-10-26T16:45:48Z",
      "last_updated_at": "2026-10-26T16:46:07Z",
      "pr_count": 29,
      "open_count": 0
    }
  ],
  "pull_requests": [
    {
      "number": 86,
      "author": "yh1030",
      "title": "B02: PR85真实导入联调与受信worker交接",
      "created_at": "2026-10-28T13:40:40Z",
      "updated_at": "2026-10-28T14:34:24Z",
      "merged_at": null,
      "closed_at": null,
      "state": "open",
      "draft": false,
      "head": "15f7ff5b346f7f5a9f7bec7323480f5ae95263d3",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/86",
      "review": {
        "state": "pending",
        "label": "待审核",
        "summary": "尚无绑定当前 HEAD 的已登记指挥审核结论。开发者自测或 CI 状态不代替审核。"
      }
    },
    {
      "number": 85,
      "author": "fungi1220",
      "title": "F02-R2: MAT 只读导入向导与 typed worker 前端接线",
      "created_at": "2026-10-28T09:05:15Z",
      "updated_at": "2026-10-28T15:21:26Z",
      "merged_at": null,
      "closed_at": null,
      "state": "open",
      "draft": true,
      "head": "d7435693344a6e7f0717f187bc77dcd063ea463d",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/85",
      "review": {
        "state": "pending",
        "label": "待审核 · 草稿",
        "summary": "尚无绑定当前 HEAD 的已登记指挥审核结论。开发者自测或 CI 状态不代替审核。"
      }
    },
    {
      "number": 84,
      "author": "yh1030",
      "title": "B04: 无人值守客机测试与快照轮次自动调度",
      "created_at": "2026-10-27T11:01:00Z",
      "updated_at": "2026-10-28T14:53:27Z",
      "merged_at": null,
      "closed_at": null,
      "state": "open",
      "draft": false,
      "head": "1511821b7933caa758ce75551d1eccf70e9dc549",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/84",
      "review": {
        "state": "pending",
        "label": "待审核",
        "summary": "尚无绑定当前 HEAD 的已登记指挥审核结论。开发者自测或 CI 状态不代替审核。"
      }
    },
    {
      "number": 83,
      "author": "yh1030",
      "title": "docs(B03-P1): collect frontend compatibility feedback and design decisions",
      "created_at": "2026-10-27T10:20:25Z",
      "updated_at": "2026-10-28T17:58:15Z",
      "merged_at": "2026-10-28T17:58:15Z",
      "closed_at": "2026-10-28T17:58:15Z",
      "state": "merged",
      "draft": false,
      "head": "0f0b9b1f42888b569630261a5b272a0e2ca25699",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/83",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 82,
      "author": "yh1030",
      "title": "docs(B03-P1): propose strict analysis schemas and source-bound numeric fixtures",
      "created_at": "2026-10-27T04:52:22Z",
      "updated_at": "2026-10-27T10:21:41Z",
      "merged_at": "2026-10-27T06:02:28Z",
      "closed_at": "2026-10-27T06:02:28Z",
      "state": "merged",
      "draft": false,
      "head": "5fad91f8aaf2c4d16b355e4ecafddf9ef03b2abe",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/82",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 81,
      "author": "fungi1220",
      "title": "F02-R1：补齐14张原图交付回执与合并状态",
      "created_at": "2026-10-27T01:45:38Z",
      "updated_at": "2026-10-27T06:02:18Z",
      "merged_at": "2026-10-27T06:02:17Z",
      "closed_at": "2026-10-27T06:02:17Z",
      "state": "merged",
      "draft": false,
      "head": "5411416ec6da1d7dd2f9d07d985da5a6482d0996",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/81",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 80,
      "author": "Viper-Boss",
      "title": "docs: 归档 PR74–79 本人接收决定并同步协作看板",
      "created_at": "2026-10-26T16:45:48Z",
      "updated_at": "2026-10-26T16:46:07Z",
      "merged_at": "2026-10-26T16:46:07Z",
      "closed_at": "2026-10-26T16:46:07Z",
      "state": "merged",
      "draft": false,
      "head": "d4577e949d5e9c2207f0f8ea21a68c1cc0c14944",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/80",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 79,
      "author": "yh1030",
      "title": "test(B02-I00): validate merged frontend/backend browsing handoff",
      "created_at": "2026-10-26T13:55:06Z",
      "updated_at": "2026-10-26T16:46:11Z",
      "merged_at": "2026-10-26T16:42:35Z",
      "closed_at": "2026-10-26T16:42:36Z",
      "state": "merged",
      "draft": false,
      "head": "bf737d78a97311fa045bbd3509a967abed09e72f",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/79",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "B02-I00交接回应与跨层组合验证",
        "summary": "2026-10-27本人要求待审通过，已合并。测试和报告范围接收；真实GUI导入/保存/任务生命周期、DPI及物理验收仍待。",
        "reviewed_date": "2026-10-27",
        "report": "docs/development/reviews/2026-10-27_V01_PR79_acceptance.md"
      }
    },
    {
      "number": 78,
      "author": "Viper-Boss",
      "title": "docs: 归档 B04 目标虚拟机六项启动与缓存复测结果",
      "created_at": "2026-10-26T12:25:35Z",
      "updated_at": "2026-10-26T12:26:04Z",
      "merged_at": "2026-10-26T12:26:04Z",
      "closed_at": "2026-10-26T12:26:04Z",
      "state": "merged",
      "draft": false,
      "head": "dd594964abf90155c1078c2c521ed0da2175443e",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/78",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 77,
      "author": "yh1030",
      "title": "perf(B04): reduce strict catalog parsing and trace startup boundaries",
      "created_at": "2026-10-26T10:09:34Z",
      "updated_at": "2026-10-26T13:25:35Z",
      "merged_at": "2026-10-26T13:25:35Z",
      "closed_at": "2026-10-26T13:25:35Z",
      "state": "merged",
      "draft": false,
      "head": "9340fdedbf71902f238f4bda4fb8f80f93e7f850",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/77",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "B04 严格解析优化与启动诊断",
        "summary": "2026-10-26 本人明确“审核全部通过”，已合并。局部优化与诊断本批接收；目标机A组六项通过，耗时波动、历史超时、B/C及Runtime-only最终证明仍待。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR74_PR77_batch-acceptance.md"
      }
    },
    {
      "number": 76,
      "author": "fungi1220",
      "title": "F02-R1：B02 缓存驱动波形、热图与可确认 ROI",
      "created_at": "2026-10-26T06:30:39Z",
      "updated_at": "2026-10-27T01:46:21Z",
      "merged_at": "2026-10-26T13:25:30Z",
      "closed_at": "2026-10-26T13:25:30Z",
      "state": "merged",
      "draft": false,
      "head": "cb3a99d9ca16f521898320ce3b48f094de765f3b",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/76",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "F02-R1 缓存样例、波形热图与ROI",
        "summary": "2026-10-26 本人明确“审核全部通过”，已合并。缓存fixture浏览/ROI及取消恢复本批接收；真实MAT导入、持久化、大矩阵性能、系统DPI及双方交接继续。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR74_PR77_batch-acceptance.md"
      }
    },
    {
      "number": 75,
      "author": "yh1030",
      "title": "test(B02-W1): verify merged main and retain cold startup timeout",
      "created_at": "2026-10-26T05:47:18Z",
      "updated_at": "2026-10-26T13:25:24Z",
      "merged_at": "2026-10-26T13:25:24Z",
      "closed_at": "2026-10-26T13:25:24Z",
      "state": "merged",
      "draft": false,
      "head": "a605fd2fb2f4f76c6d81b28b69d237104a3d214d",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/75",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "B02-W1 合并后组合验证记录",
        "summary": "2026-10-26 本人明确“审核全部通过”，已合并。开发者组合验证与真实失败记录接收；120185ms与旧120138ms根因仍未确认。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR74_PR77_batch-acceptance.md"
      }
    },
    {
      "number": 74,
      "author": "fungi1220",
      "title": "F01：修复原因菜单抢焦点并补交原生截图证据",
      "created_at": "2026-10-26T05:38:13Z",
      "updated_at": "2026-10-26T13:25:18Z",
      "merged_at": "2026-10-26T13:25:18Z",
      "closed_at": "2026-10-26T13:25:18Z",
      "state": "merged",
      "draft": false,
      "head": "e3c35ded776fdb1fb7042b41903f0f9f75bb2513",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/74",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "F01 菜单焦点修复与证据勘误",
        "summary": "2026-10-26 本人明确“审核全部通过”，已合并。菜单外部关闭焦点修复及新原生证据本批接收，系统DPI和完整交互补验继续。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR74_PR77_batch-acceptance.md"
      }
    },
    {
      "number": 73,
      "author": "Viper-Boss",
      "title": "docs: PR68/70本人本批通过与看板状态同步",
      "created_at": "2026-10-26T05:21:00Z",
      "updated_at": "2026-10-26T05:21:39Z",
      "merged_at": "2026-10-26T05:21:39Z",
      "closed_at": "2026-10-26T05:21:39Z",
      "state": "merged",
      "draft": false,
      "head": "4b2bc1570e4616efb713a090dc55fa2d6b6ff15d",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/73",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 72,
      "author": "Viper-Boss",
      "title": "fix: 看板刷新公开快照，避免浏览器展示旧进度",
      "created_at": "2026-10-25T17:12:41Z",
      "updated_at": "2026-10-25T17:14:22Z",
      "merged_at": "2026-10-25T17:14:21Z",
      "closed_at": "2026-10-25T17:14:21Z",
      "state": "merged",
      "draft": false,
      "head": "748cb4f5b209649d16906c49d6b6c9432cebe7c6",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/72",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 71,
      "author": "Viper-Boss",
      "title": "feat: 三人工作量、代码量与PR审核公开看板",
      "created_at": "2026-10-25T17:04:00Z",
      "updated_at": "2026-10-25T17:05:52Z",
      "merged_at": "2026-10-25T17:05:51Z",
      "closed_at": "2026-10-25T17:05:52Z",
      "state": "merged",
      "draft": false,
      "head": "d0f1bbef0abdb4e8f905ccf41c497b4ab6759233",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/71",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 70,
      "author": "yh1030",
      "title": "feat(B02-W1): connect verified Compiler dataset browsing to B05",
      "created_at": "2026-10-25T16:08:04Z",
      "updated_at": "2026-10-26T05:22:36Z",
      "merged_at": "2026-10-26T05:17:55Z",
      "closed_at": "2026-10-26T05:17:55Z",
      "state": "merged",
      "draft": false,
      "head": "12233703dfadd1d873f025fa8b00d5ae0f28036b",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/70",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "B02-W1 Compiler 浏览入口与现有 typed 桥接线",
        "summary": "2026-10-26 本人明确决定本批通过，已合并。开发者提供MSVC、MATLAB/Compiler及实际浏览证据；审核核对164份轻量证据hash。双方I00反馈、实际UI接线、仅Runtime目标机和物理验收仍待。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR68_PR70_user-acceptance.md"
      }
    },
    {
      "number": 69,
      "author": "Viper-Boss",
      "title": "docs: PR68键盘修复审查与证据补交要求",
      "created_at": "2026-10-25T12:05:33Z",
      "updated_at": "2026-10-25T12:05:50Z",
      "merged_at": "2026-10-25T12:05:50Z",
      "closed_at": "2026-10-25T12:05:50Z",
      "state": "merged",
      "draft": false,
      "head": "5d66979413d2cc39e3f0cab478d139a8f59fb2e8",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/69",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 68,
      "author": "fungi1220",
      "title": "F01 后续：键盘导航、禁用说明与任务焦点修复",
      "created_at": "2026-10-25T07:52:21Z",
      "updated_at": "2026-10-26T05:22:31Z",
      "merged_at": "2026-10-26T05:17:45Z",
      "closed_at": "2026-10-26T05:17:45Z",
      "state": "merged",
      "draft": false,
      "head": "91d41f745762058aabcef386b1031c90e010207e",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/68",
      "review": {
        "state": "stage_accepted",
        "label": "本人本批通过",
        "scope": "F01 键盘与原型交互修复，本人本批接收",
        "summary": "2026-10-26 本人明确决定本批通过，已合并。此前截图交付、哈希勘误、菜单焦点及系统DPI缺项仍由开发者补齐，不改写为实测通过；不覆盖后续新界面版本。",
        "reviewed_date": "2026-10-26",
        "report": "docs/development/reviews/2026-10-26_V01_PR68_PR70_user-acceptance.md"
      }
    },
    {
      "number": 67,
      "author": "Viper-Boss",
      "title": "docs: PR52回传工具审核通过及剩余事项",
      "created_at": "2026-10-25T07:33:49Z",
      "updated_at": "2026-10-25T07:34:08Z",
      "merged_at": "2026-10-25T07:34:07Z",
      "closed_at": "2026-10-25T07:34:08Z",
      "state": "merged",
      "draft": false,
      "head": "5a981eb7e3358c7d74cd0c61135235dee2770189",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/67",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 66,
      "author": "Viper-Boss",
      "title": "docs: 核对GLM参考与主线代码隔离",
      "created_at": "2026-10-25T07:19:49Z",
      "updated_at": "2026-10-25T07:20:04Z",
      "merged_at": "2026-10-25T07:20:03Z",
      "closed_at": "2026-10-25T07:20:03Z",
      "state": "merged",
      "draft": false,
      "head": "ea8a00449db0f90612ca7fcfca9d98de72392714",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/66",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 65,
      "author": "Viper-Boss",
      "title": "docs: GLM源码检查与两位成员剩余开发执行令",
      "created_at": "2026-10-25T07:03:38Z",
      "updated_at": "2026-10-25T07:04:23Z",
      "merged_at": "2026-10-25T07:04:23Z",
      "closed_at": "2026-10-25T07:04:23Z",
      "state": "merged",
      "draft": false,
      "head": "0a6780265e92170a72960ac941da3cbd4e6536db",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/65",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 52,
      "author": "yh1030",
      "title": "feat(B05): add verified timing return archives without Runtime caches",
      "created_at": "2026-10-24T17:18:58Z",
      "updated_at": "2026-10-25T07:30:50Z",
      "merged_at": "2026-10-25T07:30:50Z",
      "closed_at": "2026-10-25T07:30:50Z",
      "state": "merged",
      "draft": false,
      "head": "5120a597848cd8dc09f5350069d7943348461093",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/52",
      "review": {
        "state": "accepted",
        "label": "通过 · 工具范围",
        "scope": "B05 测试证据回传工具",
        "summary": "源码与开发者本地验证证据对应，已合并。仅接收归档工具；不代表完整 B05、Runtime-only、数值物理或最终安装验收通过。",
        "report": "docs/development/reviews/2026-10-25_V01_PR52_timing-return-acceptance.md",
        "reviewed_date": "2026-10-25"
      }
    },
    {
      "number": 51,
      "author": "Viper-Boss",
      "title": "docs: 记录PR48/49本人阶段接收及后续任务",
      "created_at": "2026-10-24T16:52:20Z",
      "updated_at": "2026-10-24T16:52:47Z",
      "merged_at": "2026-10-24T16:52:46Z",
      "closed_at": "2026-10-24T16:52:46Z",
      "state": "merged",
      "draft": false,
      "head": "104b0e9b037d493c84af0fa50ec88c5215d44069",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/51",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 49,
      "author": "yh1030",
      "title": "test(B05): validate MSVC build and deliver version-bound timing handoff",
      "created_at": "2026-10-23T01:01:35Z",
      "updated_at": "2026-10-24T16:50:07Z",
      "merged_at": "2026-10-24T16:50:07Z",
      "closed_at": "2026-10-24T16:50:07Z",
      "state": "merged",
      "draft": false,
      "head": "dab8ff6b6a184ac1822933ee6112d08e19e5ccc0",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/49",
      "review": {
        "state": "stage_accepted",
        "label": "阶段接收",
        "scope": "B05 本地 MSVC 验证和计时交接",
        "summary": "本人允许本批暂时合并，保留未完成项。目标环境、真实接线及完整任务仍须后续验收。",
        "report": "docs/development/reviews/2026-10-25_V01_PR48_PR49_acceptance.md",
        "reviewed_date": "2026-10-25"
      }
    },
    {
      "number": 48,
      "author": "yh1030",
      "title": "fix(B04): reject truncated PATH discovery and bind fresh local evidence",
      "created_at": "2026-10-23T00:31:54Z",
      "updated_at": "2026-10-24T16:49:56Z",
      "merged_at": "2026-10-24T16:49:56Z",
      "closed_at": "2026-10-24T16:49:56Z",
      "state": "merged",
      "draft": false,
      "head": "cba32d263fcd19d870aebe48b058ae620e0d49c3",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/48",
      "review": {
        "state": "stage_accepted",
        "label": "阶段接收",
        "scope": "B04 Runtime 路径绑定修复",
        "summary": "本人允许本批暂时合并。仅确认本批接收范围，目标机安装与完整部署仍需验收。",
        "report": "docs/development/reviews/2026-10-25_V01_PR48_PR49_acceptance.md",
        "reviewed_date": "2026-10-25"
      }
    },
    {
      "number": 47,
      "author": "Viper-Boss",
      "title": "docs: 记录五项PR本人阶段接收与后续任务",
      "created_at": "2026-10-22T17:49:07Z",
      "updated_at": "2026-10-22T17:49:35Z",
      "merged_at": "2026-10-22T17:49:35Z",
      "closed_at": "2026-10-22T17:49:35Z",
      "state": "merged",
      "draft": false,
      "head": "f0d922e24c8482d46bfe5623391c63176aeedfd1",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/47",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 46,
      "author": "Viper-Boss",
      "title": "docs: 开发者本地验证、报告验收与指挥分工",
      "created_at": "2026-10-22T17:38:07Z",
      "updated_at": "2026-10-22T17:38:40Z",
      "merged_at": "2026-10-22T17:38:40Z",
      "closed_at": "2026-10-22T17:38:40Z",
      "state": "merged",
      "draft": false,
      "head": "a44f510b84399150d31869e78bd58fa2c53560e9",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/46",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 45,
      "author": "Viper-Boss",
      "title": "docs: 恢复审核并复核PR31/36/38，登记部署PATH边界问题",
      "created_at": "2026-10-22T17:28:18Z",
      "updated_at": "2026-10-22T17:28:55Z",
      "merged_at": "2026-10-22T17:28:54Z",
      "closed_at": "2026-10-22T17:28:54Z",
      "state": "merged",
      "draft": false,
      "head": "dad8a12b7471b97365241336395dcc001d02aa43",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/45",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 44,
      "author": "Viper-Boss",
      "title": "docs: 今日手动复审B05三批采集与180数组原始证据",
      "created_at": "2026-10-20T09:50:58Z",
      "updated_at": "2026-10-20T09:51:44Z",
      "merged_at": "2026-10-20T09:51:44Z",
      "closed_at": "2026-10-20T09:51:44Z",
      "state": "merged",
      "draft": false,
      "head": "d737c479d5123bfd6344b651a801fe5fdb444d83",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/44",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 43,
      "author": "Viper-Boss",
      "title": "docs: 每日复审B05真实调用与B06诊断，记录Actions平台阻塞",
      "created_at": "2026-10-19T12:11:03Z",
      "updated_at": "2026-10-19T12:11:46Z",
      "merged_at": "2026-10-19T12:11:45Z",
      "closed_at": "2026-10-19T12:11:45Z",
      "state": "merged",
      "draft": false,
      "head": "83f70102c5cbf16d82257812e8881f2457218e8b",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/43",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 42,
      "author": "yh1030",
      "title": "[B06][Draft] 扩展清点与只读模型、历史诊断（首个子交付）",
      "created_at": "2026-10-19T06:42:14Z",
      "updated_at": "2026-10-22T17:45:06Z",
      "merged_at": "2026-10-22T17:45:06Z",
      "closed_at": "2026-10-22T17:45:06Z",
      "state": "merged",
      "draft": false,
      "head": "d2534d8211920d974828e2c69a98713aea827365",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/42",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 41,
      "author": "Viper-Boss",
      "title": "docs: 复审B05原子归属与typed桥，列真实Compiler待验项",
      "created_at": "2026-10-19T01:12:18Z",
      "updated_at": "2026-10-19T01:12:52Z",
      "merged_at": "2026-10-19T01:12:52Z",
      "closed_at": "2026-10-19T01:12:52Z",
      "state": "merged",
      "draft": false,
      "head": "ac05fc2bfeed239b9e4ca1e42f109c4eb96a7540",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/41",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 40,
      "author": "Viper-Boss",
      "title": "docs: 客机11项测试与独立数值复核、Runtime路径待修",
      "created_at": "2026-10-18T16:52:13Z",
      "updated_at": "2026-10-19T01:03:35Z",
      "merged_at": "2026-10-19T01:03:35Z",
      "closed_at": "2026-10-19T01:03:35Z",
      "state": "merged",
      "draft": false,
      "head": "b3e4c85adcbf65dfe671e02e28eac2ef775fad5c",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/40",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 39,
      "author": "Viper-Boss",
      "title": "docs: 晚间四项复审与新确认框视觉认可记录",
      "created_at": "2026-10-18T14:37:34Z",
      "updated_at": "2026-10-18T14:38:24Z",
      "merged_at": "2026-10-18T14:38:23Z",
      "closed_at": "2026-10-18T14:38:23Z",
      "state": "merged",
      "draft": false,
      "head": "7dd5fb87f4653f8daa7c3fcb976961fb3c533d56",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/39",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 38,
      "author": "yh1030",
      "title": "feat(B04): Compiler构建、Runtime启动与环境证据回传",
      "created_at": "2026-10-18T14:14:21Z",
      "updated_at": "2026-10-22T17:44:41Z",
      "merged_at": "2026-10-22T17:44:41Z",
      "closed_at": "2026-10-22T17:44:41Z",
      "state": "merged",
      "draft": false,
      "head": "7bc75847ea45c084b9d5e617e4f4eeeaae2b1d40",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/38",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 37,
      "author": "Viper-Boss",
      "title": "docs: B02阶段合并与F01/B03/B05持续复审",
      "created_at": "2026-10-18T03:40:03Z",
      "updated_at": "2026-10-18T03:40:28Z",
      "merged_at": "2026-10-18T03:40:28Z",
      "closed_at": "2026-10-18T03:40:28Z",
      "state": "merged",
      "draft": false,
      "head": "29bb538981241f045ab01db816a092aa7b609ee8",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/37",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 36,
      "author": "yh1030",
      "title": "[B05][Draft] Rust进程桥、Runtime子环境与首启分阶段诊断",
      "created_at": "2026-10-17T16:53:01Z",
      "updated_at": "2026-10-22T17:44:54Z",
      "merged_at": "2026-10-22T17:44:54Z",
      "closed_at": "2026-10-22T17:44:54Z",
      "state": "merged",
      "draft": false,
      "head": "24c1553a981f16b420654762f5ab7f923bfa46eb",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/36",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 35,
      "author": "Viper-Boss",
      "title": "docs: 每日复核B02交付及B03无界面核心草稿",
      "created_at": "2026-10-16T12:13:56Z",
      "updated_at": "2026-10-16T12:14:26Z",
      "merged_at": "2026-10-16T12:14:26Z",
      "closed_at": "2026-10-16T12:14:26Z",
      "state": "merged",
      "draft": false,
      "head": "5eb3e4348471e307e1bc0423120d88ec352b996d",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/35",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 34,
      "author": "yh1030",
      "title": "[B03][Draft] 无界面 MATLAB 数值核心与原函数一致性证据（技术子集）",
      "created_at": "2026-10-15T13:07:22Z",
      "updated_at": "2026-10-22T17:44:28Z",
      "merged_at": "2026-10-22T17:44:28Z",
      "closed_at": "2026-10-22T17:44:28Z",
      "state": "merged",
      "draft": false,
      "head": "9d4c72a60556afb47a2e0b4a867be6471f08a016",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/34",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 33,
      "author": "Viper-Boss",
      "title": "docs: B02类型修正独立复审与剩余交付门槛",
      "created_at": "2026-10-15T12:06:57Z",
      "updated_at": "2026-10-15T12:07:24Z",
      "merged_at": "2026-10-15T12:07:24Z",
      "closed_at": "2026-10-15T12:07:24Z",
      "state": "merged",
      "draft": false,
      "head": "1db91c86d2ea12a59bc673cd68190d022a9431e3",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/33",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 32,
      "author": "Viper-Boss",
      "title": "docs: F01原型认可与B02独立复审记录",
      "created_at": "2026-10-15T11:19:44Z",
      "updated_at": "2026-10-15T11:20:17Z",
      "merged_at": "2026-10-15T11:20:16Z",
      "closed_at": "2026-10-15T11:20:16Z",
      "state": "merged",
      "draft": false,
      "head": "5ce3068508774905ec58a8f476c44b64be534bde",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/32",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 31,
      "author": "fungi1220",
      "title": "F01: C 风格科研工作台、确认框与可取消任务演示",
      "created_at": "2026-10-15T05:44:34Z",
      "updated_at": "2026-10-22T17:45:20Z",
      "merged_at": "2026-10-22T17:45:19Z",
      "closed_at": "2026-10-22T17:45:19Z",
      "state": "merged",
      "draft": false,
      "head": "64432518c3c33aefde26621babe751f07baabf47",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/31",
      "review": {
        "state": "stage_accepted",
        "label": "阶段接收 · 原型",
        "scope": "SCI 原型、确认框和模拟任务设计",
        "summary": "对应原型已获本人认可并阶段合并。真实导入、保存、计算、导出和完整 DPI 等仍待；不覆盖新的界面改动。",
        "report": "docs/development/reviews/2026-10-23_V01_batch-stage-acceptance.md",
        "reviewed_date": "2026-10-23"
      }
    },
    {
      "number": 30,
      "author": "Viper-Boss",
      "title": "docs: B02独立审核退回记录与每日授权更新",
      "created_at": "2026-10-14T13:17:02Z",
      "updated_at": "2026-10-14T13:18:26Z",
      "merged_at": "2026-10-14T13:18:26Z",
      "closed_at": "2026-10-14T13:18:26Z",
      "state": "merged",
      "draft": false,
      "head": "b3d4c9b06d2d0346ebcb7797680197de0f14ef77",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/30",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 29,
      "author": "yh1030",
      "title": "[B02] 新增 Rust—MATLAB 浏览契约与原始数据缓存（候选）",
      "created_at": "2026-10-14T12:51:52Z",
      "updated_at": "2026-10-18T03:35:13Z",
      "merged_at": "2026-10-18T03:35:13Z",
      "closed_at": "2026-10-18T03:35:13Z",
      "state": "merged",
      "draft": false,
      "head": "4100cf3426bbfff4ebe5bd50d5bad2103ce3758e",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/29",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 28,
      "author": "Viper-Boss",
      "title": "docs: 每日审核规范与界面本人确认门槛",
      "created_at": "2026-10-14T12:47:39Z",
      "updated_at": "2026-10-14T12:48:33Z",
      "merged_at": "2026-10-14T12:48:33Z",
      "closed_at": "2026-10-14T12:48:33Z",
      "state": "merged",
      "draft": false,
      "head": "9362906ee7ec62bbad94347b9347167947a07184",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/28",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 27,
      "author": "Viper-Boss",
      "title": "docs: 记录PR26/PR10阶段验收与合并后的开发进度",
      "created_at": "2026-10-14T12:34:25Z",
      "updated_at": "2026-10-14T12:35:27Z",
      "merged_at": "2026-10-14T12:35:27Z",
      "closed_at": "2026-10-14T12:35:27Z",
      "state": "merged",
      "draft": false,
      "head": "16d21d27593e78044a44c743aa3e1294135abdfe",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/27",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 26,
      "author": "yh1030",
      "title": "B01: 全量 MATLAB 审核工具、模型恢复与可复现证据",
      "created_at": "2026-10-14T09:26:39Z",
      "updated_at": "2026-10-14T12:24:20Z",
      "merged_at": "2026-10-14T12:24:19Z",
      "closed_at": "2026-10-14T12:24:20Z",
      "state": "merged",
      "draft": false,
      "head": "63c859e4c259688c7f5adf7b0fcf08894845b58e",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/26",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 11,
      "author": "Viper-Boss",
      "title": "docs: establish complete SCI workbench development command center",
      "created_at": "2026-10-13T16:23:33Z",
      "updated_at": "2026-10-24T16:38:27Z",
      "merged_at": "2026-10-13T16:30:56Z",
      "closed_at": "2026-10-13T16:30:56Z",
      "state": "merged",
      "draft": false,
      "head": "cef47510d998fc993cf769c11c51fdc02925fb38",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/11",
      "review": {
        "state": "record",
        "label": "指挥记录已归档",
        "summary": "这条为已合并的指挥/文档交付。具体范围见 PR；不代表它提及的业务代码已获批准。"
      }
    },
    {
      "number": 10,
      "author": "Viper-Boss",
      "title": "现代科研工作台交互预览（合成数据，待验收）",
      "created_at": "2026-10-13T15:23:29Z",
      "updated_at": "2026-10-14T12:24:31Z",
      "merged_at": "2026-10-14T12:24:31Z",
      "closed_at": "2026-10-14T12:24:31Z",
      "state": "merged",
      "draft": false,
      "head": "86103589502085db6aafe2a3a81083a458fb86fa",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/10",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    },
    {
      "number": 9,
      "author": "Viper-Boss",
      "title": "docs: add handoff for local Codex development",
      "created_at": "2026-10-13T14:33:17Z",
      "updated_at": "2026-10-24T16:36:58Z",
      "merged_at": null,
      "closed_at": "2026-10-13T16:35:08Z",
      "state": "closed",
      "draft": false,
      "head": "4cc79848bfc9e23a7b091dc423c439e4f166b969",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/9",
      "review": {
        "state": "closed",
        "label": "已关闭 · 未合并",
        "summary": "PR 已关闭且未合并。关闭状态本身不能用于推断具体审核结论。"
      }
    },
    {
      "number": 8,
      "author": "Viper-Boss",
      "title": "迁移至 Rust 原生桌面程序，清理 C# 与 WPF 工程",
      "created_at": "2026-10-12T13:58:53Z",
      "updated_at": "2026-10-12T14:14:42Z",
      "merged_at": "2026-10-12T14:14:42Z",
      "closed_at": "2026-10-12T14:14:42Z",
      "state": "merged",
      "draft": false,
      "head": "e6735631d78db324013c3e3ec2de96e7188d09e8",
      "url": "https://github.com/Viper-Boss/fluxforge-mfl/pull/8",
      "review": {
        "state": "merged",
        "label": "已合并 · 详见原记录",
        "summary": "GitHub 确认已合并；本看板尚未登记更细的审核范围，请查看原 PR 和审核记录。"
      }
    }
  ],
  "privacy": "仅公开协作摘要；原始 PR/报告链接需要主仓库访问权限。没有代码、日志、原始数据或凭据。",
  "acceptance": "整体仍未完成验收；阶段接收不等于算法物理正确或正式发布。"
}
;
