import React from 'react';
import { storage } from '../../helpers/firebase';

export const upload = async (file) => {
    // alert(this.state.file, this.state.file.name);
    const uploadTask = await storage.ref(`images/${file.name}`).put(file);
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
                .child(file.name)
                .getDownloadURL()
                .then((url) => {
                    console.log('url', url);
                });
        }
    );
};
