<template>
  <div class="detail-item-params" v-if="Object.keys(itemParams).length != 0">
    <table class="params-rule">
      <tbody>
        <tr v-for="(item,index) in itemParams.size[0]" :key="index">
          <th>{{item[0]}}</th>
          <td v-for="(td_item, td_index) in item.length - 1" :key="td_index">{{ item[td_item] }}</td>
        </tr>
      </tbody>
    </table>
    <table class="params-infos">
      <tbody>
        <tr v-for="(item,index) in itemParams.infos" :key="index">
          <th>{{item.key}}</th>
          <td>{{item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "detailItemParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-rule,.params-infos{
  border-bottom: 1px solid#dfdede;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 14px;
}
.params-rule tr ,.params-infos tr{
  border-bottom: 1px solid#dfdede;
  text-align: center;
  font-weight: normal;
}
.params-rule th,.params-infos th {
  text-align: left;
  padding: 0.5rem 3.5rem 0.5rem 0rem;
  white-space: nowrap;
}
.params-rule td,.params-infos td {
  padding: 10px;
  color: var(--color-high-text);
}
</style>

