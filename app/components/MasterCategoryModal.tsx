import * as React from 'react';

export default (props: any) => (
    <div className="modal" style={{ "display": "block" }} role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add a new Master Category</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hideMasterCategoryModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="masterCategoryName">Master Category Name</label>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Master Category name"
                                value={props.masterCategoryName} 
                                onChange={props.updateMasterCategory}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => {props.addMasterCategory(props.masterCategoryName)}}>Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hideMasterCategoryModal}>Close</button>
                </div>
            </div>
        </div>
    </div>
);
