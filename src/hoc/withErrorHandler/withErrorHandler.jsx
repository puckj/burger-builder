import React, { Fragment, Component } from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = { error: null };
        reqInterceptor = axios.interceptors.request.use(
            req => {
                this.setState({ error: null });
                return req;
            });

        resInterceptor = axios.interceptors.response.use(
            res => res,
            err => {
                this.setState({ error: err });
            });

        componentWillUnmount() {
            console.log('[withErrorHandler]', 'willUnmount', 'reqInterceptor' + this.reqInterceptor, 'resInterceptor' + this.resInterceptor);

            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler;