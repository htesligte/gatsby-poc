export const parseEmbeddedEntry = (node) => {
    if(node.hasOwnProperty("data")) {
        return `<p><a href="${node.data.target.fields.slug.en_US}">&gt; ${node.data.target.fields.title.en_US}</a></p>`
    }
    console.error("Data not defined", node);
}

export const parseEmbeddedAsset = (node) => {
    if (node.hasOwnProperty("data")) {
        return `<p><a href="${node.data.target.fields.file.en_US.url}">&gt; ${node.data.target.fields.title.en_US}</a></p>`
    }
    console.error("Data not defined for asset", node);
}

export const parseLinkedEntry = (node) => {
    if (node.hasOwnProperty("data")) {
        return `<a href="${node.data.target.fields.slug.en_US}">${node.data.target.fields.title.en_US}</a>`
    }
    console.error("Data not defined for entry", node);
}

/**
 * Fix for contentful's broken rich html text renderer.
 * The "marks" property is not always available, so just add it here
 * to all content nodes.
 * 
 * @param {*} obj 
 */
export const fixMarks = (obj) => {
  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) {
      continue;
    }

    if (k === "content" && obj[k] !== null) {
      obj[k].forEach(node => {
        if (!node.hasOwnProperty("marks")) {
          node.marks = [];
        }
      });
    }

    if (typeof obj[k] === "object" && obj[k] !== null) {
      fixMarks(obj[k]);
    }
  }
}
