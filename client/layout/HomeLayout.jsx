HomeLayout = React.createClass({
    displayName: 'HomeLayout',
    render() {
        return (
            <div>
                <Header />
                {this.props.content}
                <Footer />
            </div>
        );
    }
});