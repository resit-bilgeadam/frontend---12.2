const {createElement, Component} = React;
const {render} = ReactDOM;

// createElement methodu react componenti yaratmamıza yarayan bir method
// React kütüphanesinde component dedğimiz konsept aslında bir html elementi oluşturmaya benzer
// Gerçek bir html elementi oluşturmak yerine component adını verdikleri html elementi 
// benzeri bir obje oluşturulmasının sebebi virtual DOM denilen browserın DOM'unu değil 
// Kendi sanal DOM özelliklerini kullanarak html ağacı yaratmasını sağlıyor ve bu render işlemlerini
// Daha performanslı yapmasına sebep oluyor

function clickHandler(e) {
    console.log('Clicked!!')
}

// Yaratacağımız react elementlerini yeniden kullanılabilir halde olması için
// React elementi dönen, component adını verdiğimiz fonksiyonlar içerisinde kullanabiliriz
// componentler convention olarak büyük harfle başlar
const MyButton = (title, clickHandler) => createElement('button', {
    onClick: clickHandler,
    className: 'btn'
}, title)

// Burada react componentlerini bir fonksiyon olarak yazabiliriz
const Text = (text) => createElement('p', {}, text)
const Title = (title) => createElement('h2', {}, title)

const Card = () => createElement(
    // Element tagimiz
    'div', 
    // options yani elementin attribute ve ayarlari
    {
        className: 'card'
    }, 
    // Burdan sonra bütün argümanlar child elementler
    Title('Card Title'),
    Text('Card Text'),
    Text('Text 2'),
    MyButton('Click Me!', clickHandler)
)



// React componentlerini javascript classı olarak da yazabiliriz
class ProductCard extends Component {
    constructor(props) {
        super(props)
    }

    // render adındaki fonksiyon Component classı için özel isimlendirilmiş bir fonksiyon
    // Yani react bu render fonksiyonunu kendisi kullanıyor
    // render fonksiyonu elementi yaratmak için kullanılan fonksiyon
    // Yukarıdaki örneklerdeki gibi functional olarak yazılan componentler sadece render()
    // methodundan ibaret denebilir
    render() {
        return createElement('div', {
            className: 'card'
        }, 
        Title('Product 1'), 
        Text('Description...'), 
        MyButton('Buy', clickHandler))
    }
}

const app = document.querySelector('#app');

const Main = createElement('div', {
    className: 'container'
}, Card(), createElement(ProductCard))


render(Main, app)


/*
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

*/