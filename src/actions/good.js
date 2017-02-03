export function getGoods(value) {
  return {
    type: 'good/GET_ALL',
    payload: {
      request: {
        method: 'get',
        url: '/Good?value=' + value,
      },
    }
  }
}

// export function deleteNote(id) {
//   return {
//     type: 'note/DELETE',
//     payload: {
//       request: {
//         method: 'delete',
//         url: '/note/' + id,
//       },
//     }
//   }
// }
