"use client";

import { useEffect } from "react";

// TypeScriptにwindow.hbsptの存在を教える
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

type Props = {
  portalId: string;
  formId: string;
  region: string;
};

export default function HubSpotPopupForm({ portalId, formId, region }: Props) {
  const targetId = `hubspot-form-popup-${formId}`;

  useEffect(() => {
    // スクリプトが既に読み込まれているか確認
    const script = document.getElementById("hs-forms-script");

    const createForm = () => {
      if (window.hbspt) {
        // フォームが既に存在する場合は一度削除してから再作成
        const formContainer = document.getElementById(targetId);
        if (formContainer && formContainer.firstChild) {
          formContainer.innerHTML = "";
        }
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#${targetId}`,
        });
      }
    };

    if (script && window.hbspt) {
      createForm();
    } else {
      const newScript = document.createElement("script");
      newScript.id = "hs-forms-script";
      newScript.src = "//js.hsforms.net/forms/embed/v2.js";
      newScript.async = true;
      document.body.appendChild(newScript);
      newScript.onload = () => {
        createForm();
      };
    }
  }, [portalId, formId, region, targetId]);

  return <div id={targetId} />;
}
