const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a good size for documentation screenshots
  await page.setViewportSize({ width: 1400, height: 900 });
  
  // Navigate to timeline page
  await page.goto('http://localhost:4000/docs/timeline.html');
  
  // Wait for content to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  // Take full page screenshot showing the timeline
  await page.screenshot({ 
    path: 'timeline-full-page.png',
    fullPage: true 
  });
  console.log('✓ Full page screenshot saved: timeline-full-page.png');
  
  // Take screenshot of the top portion showing sidebar with Timeline above Versions
  await page.screenshot({ 
    path: 'timeline-sidebar-nav.png',
    clip: { x: 0, y: 0, width: 400, height: 600 }
  });
  console.log('✓ Sidebar navigation screenshot saved: timeline-sidebar-nav.png');
  
  // Take screenshot of the main timeline content area
  await page.screenshot({ 
    path: 'timeline-content.png',
    clip: { x: 250, y: 100, width: 1100, height: 1200 }
  });
  console.log('✓ Timeline content screenshot saved: timeline-content.png');
  
  await browser.close();
  console.log('\n✓ All screenshots captured successfully!');
})();
