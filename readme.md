# Adapt2Job

## 代码结构说明

*   `src/App.tsx`: 应用的主要组件，包含简历输入、职位描述输入和分析结果展示。
*   `src/components/ResumeInput.tsx`: 简历输入组件，允许用户粘贴或上传简历内容。
*   `src/components/JobInput.tsx`: 职位描述输入组件，允许用户输入职位描述。
*   `src/components/AnalysisOutput.tsx`: 分析结果展示组件，展示简历优化建议和修改后的简历，并提供下载PDF按钮。
*   `src/hooks/useGemini.ts`: 使用 Gemini API 进行简历分析的 hook。
*   `src/services/gemini.ts`: 调用 Gemini API 的服务。
*   `src/services/tavily.ts`: 调用 Tavily API 的服务。

## 执行顺序

1.  用户在 `ResumeInput` 组件中输入简历内容。
2.  用户在 `JobInput` 组件中输入职位描述。
3.  用户点击“优化我的简历”按钮。
4.  `App.tsx` 中的 `handleAnalyze` 函数被调用。
5.  `handleAnalyze` 函数调用 `useGemini` hook 中的 `analyzeResume` 函数。
6.  `analyzeResume` 函数调用 `gemini.ts` 中的服务，向 Gemini API 发送请求。
7.  Gemini API 返回分析结果。
8.  `App.tsx` 中的 `setAnalysisResult` 函数被调用，更新分析结果。
9.  `AnalysisOutput` 组件展示分析结果。

## 运行逻辑

1.  `ResumeInput` 组件使用 `textarea` 元素接收用户输入的简历内容，并通过 `onChange` 事件处理函数更新 `App.tsx` 中的 `resumeText` 状态。
2.  `JobInput` 组件使用 `textarea` 元素接收用户输入的职位描述，并通过 `onChange` 事件处理函数更新 `App.tsx` 中的 `jobDescriptionText` 状态。
3.  `handleAnalyze` 函数首先检查 `resumeText` 和 `jobDescriptionText` 是否为空，如果为空则显示错误提示。
4.  如果 `resumeText` 和 `jobDescriptionText` 都不为空，则调用 `useGemini` hook 中的 `analyzeResume` 函数，向 Gemini API 发送请求。
5.  `analyzeResume` 函数接收 `resumeText` 和 `jobDescriptionText` 作为参数，并将其发送到 Gemini API。
6.  Gemini API 返回分析结果，包括简历优化建议和修改后的简历。
7.  `App.tsx` 中的 `setAnalysisResult` 函数被调用，更新分析结果。
8.  `AnalysisOutput` 组件接收分析结果作为 props，并将其展示给用户。

## 详细注释

请参考代码中的注释。

## 解决问题

*   **问题：** 实际运行时，如果不输入简历，`resumeInputRef.current` 值为 `null`，导致提示信息未弹出来。
*   **原因：** `ResumeInput` 组件没有将 `ref` 传递给 `textarea` 元素。
*   **解决方案：**
    1.  **修改 `ResumeInput.tsx`：** 将 `ref` 传递给 `textarea` 元素。
    2.  **修改 `App.tsx`：** 将 `ref` prop 更名为 `resumeInputRef`。
