import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import MainNavbar from './MainNavbar';
import MainHeader from './MainHeader';
import NoFiles from './NoFiles';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: {},
            files: []
        };
        this.handleOnClickSettings = this.handleOnClickSettings.bind(this);
        this.getIndex = this.getIndex.bind(this);
    }

    componentDidMount() {
        this.getIndex();
    }

    /**
     * 
     */
    getIndex() {
        fetch('/file/settings')
        .then((resultPromise) => {
            return resultPromise.json();
        })
        .then((result) => {
            this.setState(() => ({
                ...result
            }));
        });
    }

    /**
     * Handles user clicks on the settings button, triggers settings modal.
     */
    handleOnClickSettings() {
        console.log('Settings');
    }

    /**
     * Renders the MainPage component.
     */
    render() {
        return (
            <div>
                <MainNavbar 
                    handleOnClickSettings={this.handleOnClickSettings}
                />

                <div className="container-fluid container-main">
                    <MainHeader
                        title={'Welcome to Markdown Notes!'}
                        subtitle={'Create, edit and organize your notes with ease.'}
                    />

                    <div id="container-menu" className="row container-menu">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <button id="btn-new-note" className="btn btn-indigo" data-toggle="modal" data-target="#modal-add-new-note"><i className="fa fa-plus mr-1"></i>&nbsp;&nbsp;Add New Note</button>
                        </div>
                        <div className="col-md-7">
                            <div className="md-form active-pink active-pink-2 mb-3">
                                <input id="search-bar" className="form-control search-bar" type="text" placeholder="Search notes..." aria-label="Search" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div id="container-cards-outer" className="row container-cards">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div id="cards-row" className="row">
                                {
                                    this.state.files.length == 0 ?
                                    (
                                        <NoFiles />
                                    ) : 
                                    (
                                        this.state.files.map((x) => {
                                            return (
                                                <div className="col-md-4" key={ x.id }>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title">{ x.title }</h4>
                                                            <p className="card-text">{ moment(x.dateCreated).format('MM/DD/YYYY') }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainPage;