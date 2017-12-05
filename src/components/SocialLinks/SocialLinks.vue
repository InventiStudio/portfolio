<template lang="pug">
  .social-links
    a(:href="$t('content.urls.facebook')"):  icon(type="icon--facebook")
    a(:href="$t('content.urls.linkedin')"):  icon(type="icon--linkedin")
    a(:href="$t('content.urls.dribbble')"):  icon(type="icon--dribble")
    a(:href="$t('content.urls.behance')"):   icon(type="icon--behance")
    a(:href="$t('content.urls.instagram')"): icon(type="icon--instagram")
    a(:href="$t('content.urls.github')"):    icon(type="icon--github")
</template>

<style src="./SocialLinks.sass" lang="sass" scoped></style>
