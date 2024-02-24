function saveOrder() {
  let type = document.getElementById('type').value;
  let idea = document.getElementById('idea').value;

  let orderSummaryHTML = '<h2>Order Summary</h2>';
  orderSummaryHTML += '<p><strong>Type:</strong> ' + type + '</p>';
  if (idea) orderSummaryHTML += '<p><strong>Idea:</strong> ' + idea + '</p>';

  localStorage.setItem('order', JSON.stringify({ type: type, idea: idea }));

  // You can send this information to a server for further processing (e.g., saveOrder confirmation)

  // Display saveOrder summary on the page
  document.getElementById('orderSummary').innerHTML = orderSummaryHTML;
}

function loadOrder() {
  let json = JSON.parse(localStorage.getItem('order'));

  let orderSummaryHTML = '<h2>Order Summary</h2>';
  orderSummaryHTML += '<p><strong>Type:</strong> ' + json.type + '</p>';
  if (json.idea)
    orderSummaryHTML += '<p><strong>Idea:</strong> ' + json.idea + '</p>';
  document.getElementById('orderSummary').innerHTML = orderSummaryHTML;
}
