import "../App.css";
import LogoMedium from '../assets/logo.png'
import Code from '../assets/code.jpeg'
import User from '../assets/user.png'

function Navbar () {

    return(
        <div className="content">
        <header className="navbar">
          <div className="left">
              <a href="#" className="navbar-brand">
                  <img width="60" height="50" src={LogoMedium} alt="Logo"/>
              </a>
              <form className="search-form" role="search">
                  <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-search"></i></span>
                      <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                  </div>
              </form>
          </div>
          <div className="right">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#"><i className="bi bi-bell"></i></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true" href="#"><img className="image" width="32" height="32" src={User} alt=""/></a>
                  </li>
              </ul>
          </div>
        </header>

      <div className="title">
          <h1>React & Javascript Optimization Techniques</h1>
      </div>


          <div className="code">
              <img className="mt-4" width="700" height="467" src={Code} alt=""/>
          </div>

          <article className="article">
              <p className=" texto 1h-base">
                  When we begin a project, we tend to focus on things like scalability,
                  usability, availability, security, and others. But, as the application grows, we
                  may observe a decline in its speed and performance. It is often only at this point 
                  that we recognize the need for optimization.
              </p>
              <p className=" texto 1h-base">
                  In this article, we will present some of the most common techniques for optimizing 
                  code, which can be implemented in any application; we will also show optimization
                  techniques using sample code written in <a href="#" className="text-reset">JavaScript</a> and <a href="#" className="text-reset">React.</a> The following techniques 
                  are gonna be covered:
              </p>

              <ul>
                  <li>Debouncing</li>
                  <li>Throttling</li>
                  <li>Memoization</li>
                  <li>Pure Components</li>
                  <li>Lazy Loading</li>
                  <li>Virtualization (or Windowing)</li>
                  <li>Error Boundaries</li>
                  <li>Inline Functions</li>
              </ul>

              <p className=" texto 1h-base">
                  There are many more techniques available, but in this article, we will focus on 
                  the ones already mentioned.
              </p>

              <p className="text-center fw-bold">
                  . . .
              </p>

              <h5 className="fw-bold">Debouncing</h5>

              <p className=" texto 1h-base">Debouncing is a programming technique used to optimize the processing of functions
                  that consume a lot of execution time. This technique involves preventing those 
                  functions from executing repeatedly without control, which helps improve the 
                  performance of our applications.
              </p>

              <p className=" texto 1h-base">In the case of applications that must respond to certain user
                  actions, we often cannot avoid certain functions from being executed repeatedly.
                    For example, events such as <code>mousemove</code> or <code>window.resize</code> can trigger hundreds of calls 
                    to these functions with a simple mouse movement or browser window resizing. It is in 
                    these cases that we resort to techniques like Debouncing to limit these calls and
                    solve performance issues that may be caused by such events or functions.
              </p>

              <p className=" texto 1h-base">The operation of Debouncing is quite simple. It involves creating
                  a function that acts as an interceptor to limit the call to the callback function we
                  want to optimize. This function will have at least two parameters: <code>time</code> and <code>callback.</code> 
                  The <code>time</code> parameter is used to indicate to the Debounce how long the function should
                    wait before being called, and the <code>callback</code> parameter is the function that will be 
                    conditioned to this time limit. Once the control mechanism is created, the <code>debounce</code> 
                    function returns a new optimized function that will serve in place of the original
                    function.
              </p>

              <p className=" texto 1h-base">It is worth noting that in Debouncing, if multiple calls to the
                  callback occur within the defined time window, only the last call will be considered
                    for execution and the previous ones will be discarded. Additionally, while this is 
                    happening, the time window will also be renewed each time a call occurs. For example, 
                    if we define the time as 2 seconds, the callback defined in the <code>debounce</code> function will
                    only be executed after 2 seconds. If multiple calls occur within the time window, the 
                    time will be renewed for the same period, and only the last function that entered the 
                    <code>debounce</code> function will be executed once the defined time is met.
              </p>

              <p className=" texto 1h-base">Here is a simple example of how to implement Debouncing in code
                  using JavaScript:
              </p>


              <p className=" texto 1h-base">
                  In this simplified version, the <code>debounce</code> function returns another function that will
                  handle the debounce. The returned function clears the timer variable of any previously
                    created timeout and sets a new timeout with the <code>callback</code> it received as a parameter. 
                    Each time the new debounced function is executed, it will access the same timer 
                    variable, clear it, and replace the timeout each time.
              </p>

              <p className=" texto 1h-base">
                  Thus, we have created our debounce, and the way to use it would be as follows:
              </p>


              <p className=" texto 1h-base">
                  In this example, the <code>debouncedMessage</code> function will be called 10,000 times in a <code>for</code> loop.
                  However, due to the debounce, the message will only be displayed once instead of 10,000
                  times.
              </p>

              <p className="text-center fw-bold">
                  . . .
              </p>

              <h5 className="fw-bold">Throttling</h5>

              <p className=" texto 1h-base">
                  Throttling is a technique similar to debouncing, as both are used to limit the frequency of function
                  calls. The difference is that throttling does not clear the timer every time the function is called,
                  but instead uses a pause condition to avoid creating new timers. In other words, while the function
                  is being called, it will not wait until the last call to execute, but will only call the function 
                  if it enters the time interval where the pause is disabled.
              </p>

              <p className=" texto 1h-base">
                  Lets see an example of this to better understand it:
              </p>
              
              <p className=" texto 1h-base">
                  In the above example, we can see that unlike debounce, we now have a <code>pause</code> variable instead of a timer, and the returned
                  function now has different behavior. We can see that it now checks if the <code>pause</code> is <code>true</code> to return, which is basically to 
                  prevent the rest of the code from executing, it is an escape clause. In case the execution is not interrupted in that 
                  condition, what we will do is activate the pause, so that subsequent calls to this function will not be executed because
                    the pause will be activated. Then, we have the call to the <code>callback,</code> and finally, we close the throttling process
                    leaving a <code>setTimeout</code> to disable the pause when the time we have defined is fulfilled.
              </p>

              <p className="text-center fw-bold">
                  . . .
              </p>

          </article>

          <footer className=" footer p-3 border-light-subtle bg-opacity-10 border-top">
              <div className="letter">
                  <a href="">Help</a>
                  <a href="">Status</a>
                  <a href="">About</a>
                  <a href="">Careers</a>
                  <a href="">Blog</a>
                  <a href="">Privacity</a>
                  <a href="">Terms</a>
                  <a href="">Text to speech</a>
                  <a href="">Teams</a>
              </div>
          </footer>

  </div>
    )
}

export default Navbar; 

