import String from "../String/String";

const str = new String();

export default class Url {
  constructor() {
    this.post = "/bai-viet/:slug-:id.html";
    this.search = '/tim-kiem'
  }

  getPost = (id, title) => {
    const slug = str.getSlug(title);
    return this.post.replace(":id", id)
    .replace(":slug", slug);
  };
}
