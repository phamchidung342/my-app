import './App.css';
function withStyle(Component){
  return (props) => {
    const style = {
      color : "red",
      fontSize : "1cm",
      ...props.style,
    };
    return <Component{...props} style={style} />;
  }
}
const Text = ({style = {} }) => (
  <p style={{...style, fontFamily:"Inter"}}> MamaMia </p>
);
const StyleText = withStyle(Text);
function Welcome({name}) {
  return(
    <section>
      <h1>Hello , <span>{name}</span> 🥰</h1>
    </section>
  )
  }
function  App() {
  return(
    <div className='App'>
      <Welcome name="PhDuxng" />
      <Text />
      <StyleText />
    </div>
  )
  }
function User(){
  const name= "PhDuxng"
  const pic = "http://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={name} />
      <h2 className='user-name'>
        Hello, <span className='user-first-name'>{name}</span> 🥰
      </h2>
    </section>
  )
}
export default User;