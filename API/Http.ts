class Http {
  private basePath: string = "";

  public constructor(_basePath: string) {
    this.basePath = _basePath;
  }

  public async request(method: string, url: string, body?: object, json = true) {
    const data = await fetch(this.basePath + url, {
      credentials: "include",
      mode: "cors",
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return json ? data.json() : data;
  }
}

export default new Http("https://localhost:5001/api/");
