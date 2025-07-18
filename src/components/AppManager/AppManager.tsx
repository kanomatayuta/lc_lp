"use client";
import { useModal } from "@/context/ModalContext";
import Modal from "@/components/Modal/Modal";
import HubSpotPopupForm from "@/components/HubSpotPopupForm/HubSpotPopupForm";

export default function AppManager() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2>資料請求フォーム</h2>
      <p>必要事項をご入力の上、送信してください。</p>
      <HubSpotPopupForm
        portalId="23744455"
        formId="a5bf3cc3-1618-41f7-a36b-a6c4380b7cbd"
        region="na1"
      />
    </Modal>
  );
}
