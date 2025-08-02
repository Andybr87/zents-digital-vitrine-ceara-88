import { BauhausCard } from "./ui/bauhaus-card";

export const BauhausDemo = () => (
  <div className="w-full p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
    {/* Card 1 */}
    <BauhausCard
      id="1"
      accentColor="#156ef6"
      backgroundColor="var(--bauhaus-card-bg)"
      separatorColor="var(--bauhaus-card-separator)"
      borderRadius="2em"
      borderWidth="2px"
      topInscription="Uploaded on 12/31/2024"
      mainText="Financial Report.zip"
      subMainText="Downloading File..."
      progressBarInscription="Progress:"
      progress={75.98}
      progressValue="75.98%"
      filledButtonInscription="Share"
      outlinedButtonInscription="Bookmark"
      onFilledButtonClick={id => console.log(`Filled button clicked for ID: ${id}`)}
      onOutlinedButtonClick={id => console.log(`Outlined button clicked for ID: ${id}`)}
      onMoreOptionsClick={id => console.log(`More options dots clicked for ID: ${id}`)}
      mirrored={false}
      swapButtons={false}
      textColorTop="var(--bauhaus-card-inscription-top)"
      textColorMain="var(--bauhaus-card-inscription-main)"
      textColorSub="var(--bauhaus-card-inscription-sub)"
      textColorProgressLabel="var(--bauhaus-card-inscription-progress-label)"
      textColorProgressValue="var(--bauhaus-card-inscription-progress-value)"
      progressBarBackground="var(--bauhaus-card-progress-bar-bg)"
      chronicleButtonBg="var(--bauhaus-chronicle-bg)"
      chronicleButtonFg="var(--bauhaus-chronicle-fg)"
      chronicleButtonHoverFg="var(--bauhaus-chronicle-hover-fg)"
    />
    
    {/* Card 2 */}
    <BauhausCard
      id="2"
      accentColor="#24d200"
      backgroundColor="var(--bauhaus-card-bg)"
      separatorColor="var(--bauhaus-card-separator)"
      borderRadius="2em"
      borderWidth="2px"
      topInscription="$4.99"
      mainText="Next.js Basics"
      subMainText="This course doesn't exist!"
      progressBarInscription="Spots left:"
      progress={20}
      progressValue="20/100"
      filledButtonInscription="Enroll"
      outlinedButtonInscription="Bookmark"
      onFilledButtonClick={id => console.log(`Filled button clicked for ID: ${id}`)}
      onOutlinedButtonClick={id => console.log(`Outlined button clicked for ID: ${id}`)}
      onMoreOptionsClick={id => console.log(`More options dots clicked for ID: ${id}`)}
      mirrored={false}
      swapButtons={false}
      textColorTop="var(--bauhaus-card-inscription-top)"
      textColorMain="var(--bauhaus-card-inscription-main)"
      textColorSub="var(--bauhaus-card-inscription-sub)"
      textColorProgressLabel="var(--bauhaus-card-inscription-progress-label)"
      textColorProgressValue="var(--bauhaus-card-inscription-progress-value)"
      progressBarBackground="var(--bauhaus-card-progress-bar-bg)"
      chronicleButtonBg="var(--bauhaus-chronicle-bg)"
      chronicleButtonFg="var(--bauhaus-chronicle-fg)"
      chronicleButtonHoverFg="#151419"
    />
  </div>
);