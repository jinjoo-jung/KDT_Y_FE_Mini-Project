import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Modal } from '@/components/common';

import cartRequest from '@/api/cartRequest';
import {
  apiCartListState,
  cartCheckboxElementState,
  cartSelectedState,
} from '@/recoil/atoms/cartState';

import CartHeaderButton from './CartHeaderButton';

const DeleteSelectedButton = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [selectedCartList, setSelectedCartList] =
    useRecoilState(cartSelectedState);
  const setApiCartList = useSetRecoilState(apiCartListState);
  const setCartAllCheckboxList = useSetRecoilState(cartCheckboxElementState);

  const deleteSelectedItem = async () => {
    try {
      const res = await cartRequest.deleteCarts(selectedCartList);

      if (res.status === 'SUCCESS') {
        setApiCartList((prevApiCartList) =>
          prevApiCartList.filter(
            (prevApiCartItem) =>
              !selectedCartList.includes(String(prevApiCartItem.id))
          )
        );
        setSelectedCartList((prevSelectedCartList) =>
          prevSelectedCartList.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(prevSelectedCartItem)
          )
        );
        setCartAllCheckboxList((prevCartAllCheckedbox) =>
          prevCartAllCheckedbox.filter(
            (prevSelectedCartItem) =>
              !selectedCartList.includes(prevSelectedCartItem.name)
          )
        );
        setIsShowModal(false);
      } else if (res.status === 'FAIL') {
        // 실패 에러 처리
      } else if (res.status === 'ERROR') {
        // 서버 오류 에러 처리
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CartHeaderButton
        onClick={() => setIsShowModal(true)}
        disabled={selectedCartList.length === 0}
      >
        선택 삭제
      </CartHeaderButton>
      {isShowModal && (
        <Modal
          content={`선택하신 ${
            selectedCartList.length > 1 ? `${selectedCartList.length}개의 ` : ''
          }상품이 삭제됩니다`}
          onCancelClick={() => setIsShowModal(false)}
          onConfirmClick={deleteSelectedItem}
        />
      )}
    </>
  );
};

export default DeleteSelectedButton;
