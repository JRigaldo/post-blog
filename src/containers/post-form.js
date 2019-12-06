import React, { Component } from 'react';
import {Link} from 'react-router';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Nouveau post</h1>
                <form>
                    <div className="form-group">
                        <label>Titre</label>
                        <input className="form-control" type="text" />
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" type="textarea" />
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label>Auteur</label>
                        <input className="form-control" type="text" />
                        <div></div>
                    </div>
                    <Link to={'/'} className="button_space"><button className="btn btn-danger">Retour</button></Link>
                    <button className="btn btn-primary" type="submit">Créer</button>
                </form>
            </div>
        );
    }
}

export default PostForm;