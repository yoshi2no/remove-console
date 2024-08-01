import type { Transform } from "jscodeshift";
const transform: Transform = (fileInfo, api, options) => {
  const j = api.jscodeshift.withParser("tsx");
  const root = j(fileInfo.source);

  root
    .find(j.CallExpression, {
      callee: {
        object: { name: "console" },
      },
    })
    .remove();

  return root.toSource();
};

export default transform;
