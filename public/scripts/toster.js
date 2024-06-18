function toast(data) {
  Toastify({
    text: data,
    duration: '3000',
    gravity: 'bottom',
    style: {
      background: 'rgba(244,122,242,0.66)',
    },
  }).showToast();
}

function changePrice() {
  let value = document.getElementById('value').value;
  let id = document.getElementById('id').value;

  socket.emit('updatePrice', id, value);

  console.log(`http://localhost:2309/product/${id}/${value}`);

  fetch(`http://localhost:2309/product/${id}/${value}`, {
    method: 'PATCH',
  });
}

function socketOn() {
  socket.on('priceUpdated', (data) => {
    console.log(data);
    toast(data.body);
  });
}
