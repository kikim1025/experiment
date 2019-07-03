import React from 'react';
import Modal from './Modal';

class Project extends React.Component {
    // Local state for modal control
    state = {
        modal: false
    };

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };
    
    render() {
        return (
            <div className='proj-box'>
                { this.state.modal 
                    ?   <Modal title={this.props.proj.title} img={this.props.proj.img} 
                            keywords={this.props.proj.keywords} desc={this.props.proj.desc} 
                            github={this.props.proj.github} deployed={this.props.proj.deployed} 
                            toggleModal={this.toggleModal} />
                    :   ''
                }
                <div className='proj' onClick={() => this.toggleModal()}>
                    <div className='proj__title'>{this.props.proj.title}</div>
                </div>
            </div>
        );
    };
};

export default Project;