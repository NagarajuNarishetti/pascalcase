import { PersonIcon, CheckCircledIcon, InfoCircledIcon, LightningBoltIcon, LockClosedIcon, RocketIcon } from '@radix-ui/react-icons';
import type { ElementType } from 'react';

type Color = 'cyan' | 'blue' | 'purple';
type StepData = { number: string; title: string; content: string; color: Color; Icon: ElementType };

export default function SixStepInfographic() {
  const leftSteps: StepData[] = [
    {
      number: '01',
      title: 'Ex-Microsoft Employees',
      content: 'Unparalleled product knowledge to accelerate your success.',
      color: 'cyan',
      Icon: PersonIcon,
    },
    {
      number: '02',
      title: 'Low Total Cost',
      content: 'Lean delivery that maximizes value and minimizes waste.',
      color: 'blue',
      Icon: CheckCircledIcon,
    },
    {
      number: '03',
      title: 'License Savings',
      content: 'Architectures that reduce licensing overhead where possible.',
      color: 'purple',
      Icon: InfoCircledIcon,
    },
  ];

  const rightSteps: StepData[] = [
    {
      number: '04',
      title: 'Faster Time-to-Value',
      content: 'Iterative delivery that shows results from day one.',
      color: 'cyan',
      Icon: LightningBoltIcon,
    },
    {
      number: '05',
      title: 'Secure by Design',
      content: 'Security-first approach across environments and data.',
      color: 'blue',
      Icon: LockClosedIcon,
    },
    {
      number: '06',
      title: 'Partner Mindset',
      content: 'We work with you, not just for you.It is for us too.',
      color: 'purple',
      Icon: RocketIcon,
    },
  ];

  const getColorStyles = (color: Color) => {
    const colorMap: Record<string, { bgGradient: string; numberGradient: string; iconColor: string; borderColor: string }> = {
      cyan: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
      blue: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
      purple: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
    };
    return colorMap[color];
  };

  const LeftStepBox = ({ step }: { step: StepData }) => {
    const styles = getColorStyles(step.color);
  return (
      <div className="flex items-center justify-end group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className={`relative bg-gradient-to-r ${styles.bgGradient} border ${styles.borderColor} rounded-full px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 mr-4 backdrop-blur-md w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[28rem]`}>
          <div className="flex items-center">
            <div className={`${styles.iconColor} mr-3 flex-shrink-0`}>
              {(() => {
                const Icon = step.Icon as ElementType;
                return <Icon className="h-[18px] w-[18px] drop-shadow-sm" aria-hidden />;
              })()}
            </div>
            <div className="flex-1">
              <h3 className="text-text-primary font-bold text-sm tracking-wide mb-1.5">{step.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{step.content}</p>
            </div>
          </div>
          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
            <div
              className={`w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-cyan-200`}
              style={{
                borderLeftColor: 'rgba(255,255,255,0.35)',
              }}
            />
          </div>
        </div>
        <div className="w-12 h-0.5 bg-gray-300 mr-2" />
        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-text-primary text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-surface-input border border-border-default ring-1 ring-border-subtle`}>
          {step.number}
        </div>
      </div>
    );
  };

  const RightStepBox = ({ step }: { step: StepData }) => {
    const styles = getColorStyles(step.color);
    return (
      <div className="flex items-center justify-start group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/10 border border-white/20 ring-1 ring-white/10`}>
          {step.number}
        </div>
        <div className="w-12 h-0.5 bg-gray-300 ml-2" />
        <div className={`relative bg-gradient-to-r ${styles.bgGradient} border ${styles.borderColor} rounded-full px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 ml-4 backdrop-blur-md w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[28rem]`}>
          <div className="flex items-center">
            <div className="flex-1 text-right">
              <h3 className="text-text-primary font-bold text-sm tracking-wide mb-1.5">{step.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{step.content}</p>
            </div>
            <div className={`${styles.iconColor} ml-3 flex-shrink-0`}>
              {(() => {
                const Icon = step.Icon as ElementType;
                return <Icon className="h-[18px] w-[18px] drop-shadow-sm" aria-hidden />;
              })()}
            </div>
          </div>
          <div className="absolute top-1/2 -left-3 transform -translate-y-1/2">
            <div
              className={`w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-transparent border-r-cyan-200`}
              style={{
                borderRightColor: 'rgba(255,255,255,0.35)',
              }}
            />
                      </div>
                    </div>
                  </div>
    );
  };

  return (
    <div className="min-h-[28rem] flex items-center justify-center p-8 my-12 md:my-16">
      <div className="w-full max-w-6xl relative">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-16 w-2/5">
            {leftSteps.map((step, index) => (
              <LeftStepBox key={`left-${index}`} step={step} />
            ))}
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-dashed border-white/40 backdrop-blur-md flex items-center justify-center relative">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex flex-col items-center justify-center border border-white/30">
                <div className="text-yellow-500 mb-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                    <rect x="9" y="19" width="6" height="1" rx="0.5" />
                    <rect x="10" y="21" width="4" height="1" rx="0.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black leading-none">6 Features</div>
                  <div className="text-xs text-black/70 mt-1 tracking-widest font-medium">Pascalcase</div>
                        </div>
                      </div>
                    </div>
                  </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-16 w-2/5">
            {rightSteps.map((step, index) => (
              <RightStepBox key={`right-${index}`} step={step} />
            ))}
          </div>
        </div>
         
      </div>
    </div>
  );
}
