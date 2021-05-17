import React from "react";
class Home extends React.Component{

    render()
    {
        return(
        <div>
                <div class="image">
                
                <img src="https://www.shivaami.com/images/smtech.jpg" alt="home" width="200px" />
               
                </div>
        <div class="login">
                     <div class="social">
                    <div class="log">
                     <p >Log In</p>
                     </div>
                    </div>
                <div class="social-media">
                <a href="https://cpanel.hostinger.in/auth/oauth/provider/facebook" title="Log in with Facebook" class="fa fa-facebook"></a>  
                <a href="https://cpanel.hostinger.in/auth/oauth/provider/google" title="Log in with Google" class="fa fa-google"></a>
                </div>
                                <p class="divide"><span> OR </span></p>
    
                     <form>
                      <div class="user">
                          <input type="text" placeholder="Email Address" required="required" />

                          </div>
                          <br />
                         <div class="password">
                            <input type="password" placeholder="Password" required="required" />
                            </div>
                             <button class="log-in"><b>Log In</b></button>
                         </form>

                <div class="bottom">
                 <a href="enter here" >Forgot password?</a>
                 </div>
 </div>
                 <div class="down">
                <a href="home" >Not a member yet? <b>Choose hosting plan</b> and get started now!</a>
                </div>


        </div>
        );
    }
}

export default Home;