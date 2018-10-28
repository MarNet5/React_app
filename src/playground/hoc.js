//higher order component(HOC) - A component that renders another component
//reuse code
//render hijacking
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
       <h1>Info</h1>
       <p>This info is: {props.info}</p> 
    </div>
);

const withAdminWarning  = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
const requireAuthentification = (WrappedComponent) => {
    return(props) => (
        <div>
        {props.isAuthentificated ? (
           <WrappedComponent {...props}/>  
        ) : (
            <p>Please log in to view the information</p>
        )}
       </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificated={true} info="the details" />, document.getElementById('app'));