class Get extends HttpWorker {
  async crawl(url) {
    let result = await this.Got(encodeURI(url));
    return result.body;
  }
}
