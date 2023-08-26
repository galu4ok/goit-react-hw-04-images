import { ImageGalleryItemImage } from './ItemGalleryItem.styled';
import { Component } from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import { ModalCloseBtn } from 'components/Modal/ModalCloseBtn.styled';

const customStyles = {
  content: {
    maxWidth: 'fit-content',
    maxHeight: 'fit-content',
    margin: 'auto',
    overflow: 'none',
    inset: 0,
    padding: 0,
    border: 'none',
    background: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 3000,
  },
};
Modal.setAppElement('#root');
export class ImageGalleryCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      image: { webformatURL, tags, largeImageURL = 'Loading...' },
    } = this.props;

    return (
      <>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <img src={largeImageURL} alt={tags} />
          <ModalCloseBtn onClick={this.closeModal}>
            <ImCross size={20} />
          </ModalCloseBtn>
        </Modal>
      </>
    );
  }
}
