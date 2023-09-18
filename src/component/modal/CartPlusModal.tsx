import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface CartPlusProps {
  onClose: () => void;
  openCartPlus: boolean;
  setOpenCartPlus: (value: boolean) => void;
  openCartPlusSrc: string;
}

function CartPlusModal({
  onClose,
  openCartPlus,
  setOpenCartPlus,
}: CartPlusProps) {
  const outside = useRef<HTMLDivElement>(null);

  // 모달 텍스트
  const modalText = {
    title: '',
    btn: '확인',
  };

  // 모달창 밖 클릭 시 닫기
  const handleModalClose = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (openCartPlus && outside.current === e.target) {
      setOpenCartPlus(false);
    }
  };

  return ReactDOM.createPortal(
    <OverLay>
      <OutLine
        ref={outside}
        onClick={(e) => handleModalClose(e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleModalClose(e);
          }
        }}
        role="presentation"
      >
        <Wrap>
          <h1 className="modal_title">{modalText.title}</h1>
          <button className="modal_button" onClick={onClose}>
            {modalText.btn}
          </button>
        </Wrap>
      </OutLine>
    </OverLay>,
    document.getElementById('modal')!,
  );
}

const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999999;
`;

const OutLine = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom); /* 하단 안전 영역 고려 */
`;

const Wrap = styled.div`
  position: relative;
  background: var(--reoh-white);
  width: 495px;
  border-radius: 15px;
  text-align: center;
  padding: 40px 20px;
  overflow: hidden;
  white-space: pre-wrap;
`;

export default CartPlusModal;
