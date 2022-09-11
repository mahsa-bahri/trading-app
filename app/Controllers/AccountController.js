import 'regenerator-runtime/runtime'
import { Error } from "./StatusHandling";
import { Config } from "./Config";

const Login = async (email, pass) => {

  // You must create a function for logOut
  // if (localStorage.getItem("key")){
  //  await logout(); 
  // }

  var formdata = new FormData();
  formdata.append("password", pass);
  formdata.append("username", email);

  let req = new Request(
    Config.getBaseUrl() + '/api/v1/auth/login',
    {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }
  );

  const response = await fetch(req)
  const json = await response.json();

  Error.ErorrHandling(json.status);

  /*if (json.data.key) {
    // var MyToken = encode(json.data.key + "");
    // console.log(MyToken)
    localStorage.setItem("key", MyToken);
  }*/

  return {
    json: json.data,
    status: json.status,
    message: json.message
  };
}

const Signup = async (user, email, pass1, pass2) => {

  // You must create a function for logOut
  // if (localStorage.getItem("key")){
  //  await logout(); 
  // }

  var formdata = new FormData();
  formdata.append("username", user);
  formdata.append("email", email);
  formdata.append("password", pass1);
  formdata.append("confirm_password", pass2);


  let req = new Request(
    Config.getBaseUrl() + '/api/v1/auth/sign-up',
    {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }
  );

  const response = await fetch(req)
  const json = await response.json();

  Error.ErorrHandling(json.status);
  
  /*if (json.data.key) {
    // var MyToken = encode(json.data.key + "");
    // console.log(MyToken)
    localStorage.setItem("key", MyToken);
  }*/

  return {
    json: json.data,
    status: json.status,
    message: json.message
  };
}

export const AccountController = {
  Login,
  Signup,
}