import React from 'react';
import moment from 'moment';
import { HashLoader } from 'react-spinners';

class CardSettingsModal extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Renders the CardSettingsModal component.
     */
    render() {
        return (
            <div className="modal fade right" id="modal-card-settings" tabIndex="-1" role="dialog" aria-labelledby="modal-card-settings"
                aria-hidden="true" data-backdrop="false">
                <div className="modal-dialog modal-full-height modal-right modal-notify modal-primary" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="heading lead">
                            {
                                this.props.cardSettingsData.title
                            }
                            </p>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="white-text">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="text-left">
                                <h4>
                                {
                                    `Date Created: ${moment(this.props.cardSettingsData.dateCreated).format('LL')}`
                                }
                                </h4>
                                <p>
                                    This is a Markdown note you created. 
                                </p>
                            </div>
                            
                            <div className="container-loading">
                                <div className='sweet-loading loading-download'>
                                    <HashLoader
                                    color={'#123abc'} 
                                    loading={ this.props.loading } 
                                    />
                                </div>
                            </div>
                        </div>
                    
                        <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-modal-card-settings"
                            onClick={() => {
                                this.props.handleOpenNoteInEditor(this.props.cardSettingsData.id);
                            }}>
                            Open in Editor
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-primary btn-modal-card-settings"
                            onClick={() => {
                                this.props.handleExportToPDF(this.props.cardSettingsData.id);
                            }}>
                            Export to PDF
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger btn-modal-card-settings"
                            onClick={() => {
                                this.props.handleDeleteNote(this.props.cardSettingsData.id);
                            }}>
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CardSettingsModal;
