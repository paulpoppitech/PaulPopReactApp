export function getGoods(value) {
  let url = value ? '?value=' + value : '';
  return {
    type: 'good/GET_ALL',
    payload: {
      request: {
        method: 'get',
        url: '/Good' + url,
      },
    }
  }
}

export function sellGood(name, quantity, price) {
  console.log(name, quantity, price, 'action')
  return {
    type: 'good/SELL',
    payload: {
      request: {
        method: 'post',
        url: '/Good/sell',
        data: {
          'name' : name,
          'quantity' : parseInt(quantity),
          'price' : parseInt(price)
        }
      },
    }
  }
}

export function buyGood(name, quantity, price) {
  console.log(name, quantity, price, 'action')
  return {
    type: 'good/BUY',
    payload: {
      request: {
        method: 'post',
        url: '/Good/buy',
        data: {
          'name' : name,
          'quantity' : parseInt(quantity),
          'price' : parseInt(price)
        }
      },
    }
  }
}

export function setBuy() {
  return {
    type: 'good/SET_BUY',
  }
}

export function setSell() {
  return {
    type: 'good/SET_SELL',
  }
}
