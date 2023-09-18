import axios from 'axios';
import Image from 'next/image';
import { memo } from 'react';
import { SubmitHandler, useController } from 'react-hook-form';

import { LandingCTAButtonComponent, LandingListItemComponent, Input } from '@/components';
import { useBreakpoint } from '@/hooks';

import Section6Img1 from './assets/section6_img_1.png';
import Section6Img2 from './assets/section6_img_2.png';
import { LandingSixthSectionOutlineButton } from './components';
import { InquiryForm, useLandingSixthSectionInquiry } from './hooks';
import { SIXTH_SECTION_FIRST_ITEMS } from './landing-sixth-section.const';



export const LandingSixthSectionModule = memo(() => {
  const { control, handleSubmit } = useLandingSixthSectionInquiry();

  const { isDesktop } = useBreakpoint();

  const {
    field: { onChange: onChangeName, value: nameValue },
  } = useController({ control, name: 'NAME' });
  const {
    field: { onChange: onChangeSchool, value: schoolValue },
  } = useController({ control, name: 'SCHOOL' });
  const {
    field: { onChange: onChangeEmail, value: emailValue },
  } = useController({ control, name: 'EMAIL' });

  const sendInquiry: SubmitHandler<InquiryForm> = async ({ NAME, SCHOOL, EMAIL }) => {
    const url = 'https://hooks.slack.com/services/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';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    await axios({
      method: 'post',
      url,
      data: `{ text: 'Name: ${NAME}\nSchool: ${SCHOOL}\nEmail: ${EMAIL}' }`,
      headers: headers,
    });
  };

  const onClickSendInquiryButton = async () => {
    await handleSubmit(sendInquiry)();
  };

  const handleClickSolutionServiceButton = () => {
    window.open(
      'https://capa.ai/partner/1901/(%EC%A3%BC)-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4%EC%98%A4%EC%85%98',
      '_blank',
      'noopener,noreferrer',
    );
  };

  if (isDesktop) {
    return (
      <div
        id="Contact Us"
        tabIndex={0}
        className="flex flex-col gap-16 px-[165px] bg-landing-gray-1000 py-24"
      >
        <div className="flex flex-col gap-10">
          <div className="prose prose-title1 text-landing-secondary">Contact Us</div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-row gap-12">
              <div className="flex-1">
                <div className="relative w-full aspect-[540/280] rounded">
                  <Image src={Section6Img1} alt="section6Img1" fill />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 gap-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span>
                      <span className="prose prose-h2 landing_screen_gradient">
                        Design Solution
                      </span>
                    </span>
                    <span className="prose text-white prose-title2">
                      Get Custom design assistance from experienced engineers!
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {SIXTH_SECTION_FIRST_ITEMS.map((copy) => (
                      <LandingListItemComponent key={copy} copy={copy} />
                    ))}
                  </div>
                </div>
                <LandingCTAButtonComponent onClick={handleClickSolutionServiceButton}>
                  Solution Service
                </LandingCTAButtonComponent>
              </div>
            </div>
            <div className="flex flex-row gap-12">
              <div className="flex-1">
                <div className="relative w-full rounded">
                  <Image src={Section6Img2} alt="section6Img2" />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 gap-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span>
                      <span className="prose prose-h2 landing_screen_gradient">METHEUS</span>
                    </span>
                    <span className="prose text-white prose-title2">
                      Interested in METHEUS? Get our latest news!
                    </span>
                  </div>
                  <div className="flex flex-col gap-5 max-w-[340px]">
                    <Input placeholder="Enter name" onChange={onChangeName} value={nameValue} />
                    <Input
                      placeholder="Enter company/school"
                      onChange={onChangeSchool}
                      value={schoolValue}
                    />
                    <Input
                      placeholder="Enter email"
                      type="email"
                      onChange={onChangeEmail}
                      value={emailValue}
                    />
                    <div className="prose text-white prose-title3 opacity-40">
                      For further inquiries, feel free to reach out at csteam@ideaocean.ai.
                    </div>
                  </div>
                </div>
                <LandingCTAButtonComponent onClick={onClickSendInquiryButton}>
                  Send
                </LandingCTAButtonComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-20">
          <LandingSixthSectionOutlineButton
            url="https://ideaocean.notion.site/About-IDeAOcean-2ac3722df6f54d86955bd07d19f83d82?pvs=4"
            content="Learn More"
          />
          <LandingSixthSectionOutlineButton
            url="https://ideaocean.notion.site/Careers-a3b9ef16aace4a5783638d5141b7cf06?pvs=4"
            content="Careers"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      id="Contact Us"
      tabIndex={0}
      className="flex flex-col items-center px-6 pt-6 gap-9 pb-14 bg-landing-gray-1000"
    >
      <div className="flex flex-col gap-16 md:max-w-[520px]">
        <div className="prose prose-title3 text-[]">Contact Us</div>
        <div className="flex flex-col w-full gap-4">
          <div className="relative w-full aspect-[320/280] rounded">
            <Image src={Section6Img1} alt="section6Img1" fill />
          </div>
          <div className="flex flex-col gap-4">
            <span className="prose prose-h2">
              <span className="landing_screen_gradient">{`Design\n`}</span>
              <span className="landing_screen_gradient">Solution</span>
            </span>
            <div className="flex flex-col gap-2">
              <div className="prose text-white prose-body1">
                {'Get Custom design assistance from\nexperienced engineers!'}
              </div>
              {SIXTH_SECTION_FIRST_ITEMS.map((copy) => (
                <LandingListItemComponent key={copy} copy={copy} />
              ))}
            </div>
            <LandingCTAButtonComponent onClick={handleClickSolutionServiceButton}>
              Solution Service
            </LandingCTAButtonComponent>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="relative w-full rounded">
            <Image src={Section6Img2} alt="section6Img2" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <span className="prose prose-h2">
                  <span className="landing_screen_gradient">METHEUS</span>
                </span>
                <div className="prose text-white prose-body1">
                  Interested in METHEUS? Get our latest news!
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Input placeholder="Enter name" onChange={onChangeName} value={nameValue} />
                <Input
                  placeholder="Enter company/school"
                  onChange={onChangeSchool}
                  value={schoolValue}
                />
                <Input
                  placeholder="Enter email"
                  type="email"
                  onChange={onChangeEmail}
                  value={emailValue}
                />
                <div className="prose text-white prose-title3 opacity-40">
                  For further inquiries, feel free to reach out at csteam@ideaocean.ai.
                </div>
                <LandingCTAButtonComponent onClick={onClickSendInquiryButton}>
                  Send
                </LandingCTAButtonComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
          <LandingSixthSectionOutlineButton
            url="https://ideaocean.notion.site/About-IDeAOcean-2ac3722df6f54d86955bd07d19f83d82?pvs=4"
            content="Learn More"
          />
          <LandingSixthSectionOutlineButton
            url="https://ideaocean.notion.site/Careers-a3b9ef16aace4a5783638d5141b7cf06?pvs=4"
            content="Careers"
          />
        </div>
      </div>
    </div>
  );
});

LandingSixthSectionModule.displayName = 'LandingSixthSectionModule';
