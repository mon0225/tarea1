import React from 'react';


const Table = ({name, picture, popularity, deleteContact}) => (
    <div>
        <center>
            <table style={{widht: '200px'}}  class="uk-table uk-table-small uk-table-divider uk-table-striped">
                <thead>
                    <tr>
                        <th>PICTURE</th>
                        <th>NAME</th>
                        <th>POPULARITY</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={picture} alt="picture" width="100px" height="100px" /></td>
                        <td>{name}</td>
                        <td>{popularity}</td>
                        <td> <button class="uk-button uk-button-default"
                        deleteContact={this.deleteContact}><span uk-icon="trash">
                        </span>
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </center>
    </div>
);

export default Table;