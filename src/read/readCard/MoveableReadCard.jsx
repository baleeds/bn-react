import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentCard from '../../shared/ContentCard';
import Link from '../../shared/Link';
import routes from '../../shared/constants/routes';

const DEFAULT_READ_CARD_TOP = 50;
const DEFAULT_READ_CARD_LEFT = 0;
const DEFAULT_READ_CARD_NAV_OFFSET = 100;

class MoveableReadCard extends Component {
  state = {}

  getTop = () => {
    const { isBookNavOpen } = this.props;

    if (isBookNavOpen) return window.innerHeight;
    return DEFAULT_READ_CARD_TOP;
  }

  getLeft = () => {
    const { isMainNavOpen } = this.props;

    if (isMainNavOpen) return Math.min(window.innerWidth - DEFAULT_READ_CARD_NAV_OFFSET, 300);
    return DEFAULT_READ_CARD_LEFT;
  }

  getTransform = () => {
    const y = this.getTop();
    const x = this.getLeft();

    return `translateY(${y}px) translateX(${x}px)`;
  }

  render() {
    return (
      <ContentCard
        style={{
          transform: this.getTransform(),
        }}
      >
        Lorem ipsum
        <Link to={routes.readVerse.action({ chapterId: 1, bookId: 1, verseId: 1 })}>
          Read verse
        </Link>
      </ContentCard>
    );
  }
}

const mapStateToProps = state => ({
  isMainNavOpen: state.navigation.isMainNavOpen,
  isBookNavOpen: state.navigation.isBookNavOpen,
});

export default connect(mapStateToProps)(MoveableReadCard);
