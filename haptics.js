// haptics.js
async function triggerHaptic(type = 'LIGHT') {
  if (window.Capacitor && window.Capacitor.isPluginAvailable('Haptics')) {
    const { Haptics, ImpactStyle } = window.Capacitor.Plugins;
    const styles = {
      LIGHT: ImpactStyle ? ImpactStyle.Light : 'LIGHT',
      MEDIUM: ImpactStyle ? ImpactStyle.Medium : 'MEDIUM',
      HEAVY: ImpactStyle ? ImpactStyle.Heavy : 'HEAVY'
    };
    await Haptics.impact({ style: styles[type] || styles.LIGHT });
  } else if ('vibrate' in navigator) {
    navigator.vibrate(type === 'HEAVY' ? 40 : 15);
  }
}
