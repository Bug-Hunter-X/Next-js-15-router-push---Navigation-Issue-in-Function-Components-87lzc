```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    return () => {
      // Cleanup function to handle potential navigation during component unmount
      if (isNavigating) {
        // Optionally, add a mechanism to handle interruptions
        console.log('Navigation interrupted during unmount.');
      }
    };
  }, [isNavigating]);

  const handleClick = () => {
    setIsNavigating(true);
    router.push('/', undefined, { shallow: true })
      .then(() => {
        setIsNavigating(false);
      })
      .catch((error) => {
        setIsNavigating(false);
        console.error('Navigation failed:', error);
      });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```