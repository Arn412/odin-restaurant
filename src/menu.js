// menu.js
export function menu() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <h1>Our Menu</h1>
      <div class="menu-item">
        <h2>Margherita Pizza</h2>
        <p>Classic wood-fired pizza topped with San Marzano tomatoes, mozzarella, and fresh basil.</p>
      </div>
      <div class="menu-item">
        <h2>Fettuccine Alfredo</h2>
        <p>Fresh fettuccine pasta tossed in a rich and creamy parmesan sauce.</p>
      </div>
      <div class="menu-item">
        <h2>Lasagna Bolognese</h2>
        <p>Layered pasta with slow-cooked beef ragu, béchamel sauce, and melted cheese.</p>
      </div>
      <div class="menu-item">
        <h2>Bruschetta</h2>
        <p>Toasted Italian bread topped with fresh tomatoes, garlic, olive oil, and basil.</p>
      </div>
      <div class="menu-item">
        <h2>Tiramisu</h2>
        <p>Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream.</p>
      </div>
    `;
  }
  