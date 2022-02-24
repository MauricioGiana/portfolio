import React, { Component } from 'react';

class Socials extends Component {
    render() {
        return (
            <div className='socials-container'>
                <ul>
                    {
                        this.props.data?.map(item => (
                            <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <i className={item.class}></i>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Socials;
