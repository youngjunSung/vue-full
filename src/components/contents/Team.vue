<template>
  <div class="contents">
    <TeamMusic></TeamMusic>
    <TeamWebtoon></TeamWebtoon>
    <TeamSoft></TeamSoft>
  </div>
</template>

<script>
import TeamMusic from './team/TeamMusic'
import TeamWebtoon from './team/TeamWebtoon'
import TeamSoft from './team/TeamSoft'

export default {
  name: 'Team',
  components: {
    TeamMusic,
    TeamWebtoon,
    TeamSoft
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>
