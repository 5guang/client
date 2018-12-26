/* http.js */
/*eslint-disable*/
import 'whatwg-fetch'

// HTTP 工具类
export default class Http {
  static async request(method, url, data) {
    const param = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (method === 'GET') {
      url += this.formatQuery(data)
    } else {
      param['body'] = JSON.stringify(data)
    }


    return fetch(url, param).then(response => this.isSuccess(response))
      .then(response => {
        return response.json()
      })
  }

  static isSuccess(res) {
    if (res.status >= 200 && res.status < 300) {
      return res
    } else {
      this.requestException(res)
    }
  }

  static requestException(res) {
    const error = new Error(res.statusText)

    error.response = res

    throw error
  }

  static formatQuery(query) {
    let params = [];

    if (query) {
      for (let item in query) {
        let vals = query[item];
        if (vals !== undefined) {
          params.push(item + '=' + vals)
        }
      }
    }
    return params.length ? '?' + params.join('&') : '';
  }

  static get(url, data) {
    return this.request('GET', url, data)
  }

  static post(url, data) {
    return this.request('POST', url, data)
  }
}
