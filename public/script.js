// script.js

async function getItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      itemList.appendChild(li);
    });
  }
  
  async function addItem(name) {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    if (response.ok) {
      getItems();
    }
  }
  
  document.getElementById('item-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    addItem(itemName);
    document.getElementById('item-name').value = '';
  });
  
  getItems();
  