import React, { Component } from 'react';
import { storage } from '../../helpers/firebase';

export default class Image extends Component {
    state = {
        file: [],
    };

    upload = () => {
        // alert(this.state.file, this.state.file.name);
        const uploadTask = storage.ref(`images/${this.state.file.name}`).put(this.state.file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // progress function ...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // this.setState({ progress });
                console.log(progress);
            },
            (error) => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref('images')
                    .child(this.state.file.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log('url', url);
                    });
            }
        );
    };

    render() {
        return (
            <div>
                <h1>image upload </h1>
                <input type="file" onChange={(e) => this.setState({ file: e.target.files[0] })} />

                <br />
                <br />

                <button type="submit" onClick={this.upload}>
                    {' '}
                    Upload
                </button>
            </div>
        );
    }
}
