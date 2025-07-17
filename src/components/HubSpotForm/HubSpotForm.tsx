"use client";

import Script from "next/script";

// ★ここから追加：TypeScriptにwindow.hbsptの存在を教える
declare global {
  interface Window {
    hbspt?: {
      // hbsptは存在しない可能性もあるのでオプショナル(?)にする
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
// ★ここまで追加

type Props = {
  portalId: string;
  formId: string;
  region: string;
};

export default function HubSpotForm({ portalId, formId, region }: Props) {
  const targetId = `hubspot-form-container-${formId}`;

  return (
    <>
      <div id={targetId} />

      <Script
        id="hs-forms-script"
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          // スクリプト読み込み完了後にフォームを作成
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: region,
              portalId: portalId,
              formId: formId,
              target: `#${targetId}`,
            });
          }
        }}
      />
    </>
  );
}
