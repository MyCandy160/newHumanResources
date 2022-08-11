<template>
  <div>
    <el-row type="flex" justify="end">
      <el-select v-model="currentYear" placeholder="请选择">
        <el-option
          v-for="item in yearList"
          :key="item"
          :label="`${item}年`"
          :value="item"
        >
        </el-option
      ></el-select>
      <el-select v-model="currentMonth" placeholder="请选择">
        <el-option
          v-for="item in 12"
          :key="item"
          :label="`${item}月`"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-row>
    <el-calendar v-model="value">
      <template #dateCell="{ data: { day }, date }">
        <div class="date-content">
          <span class="text">{{ day | getDay }}</span>
          <span v-if="isWeek(date)" class="rest">休</span>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "WorkCalendar",
  filters: {
    getDay(value) {
      const day = value.split("-")[2];
      return day.startsWith("0") ? day.substr(1) : day;
    },
  },
  props: {
    startDate: {
      type: Date,
      default: () => new Date(),
    },
  },
  created() {
    this.currentMonth = this.startDate.getMonth() + 1;
    this.currentYear = this.startDate.getFullYear();
    this.yearList = Array.from(Array(11), (item, index) => {
      return this.currentYear + index - 5;
    });
  },
  computed: {
    value: {
      get() {
        return new Date(this.currentYear, this.currentMonth - 1);
      },
      set(value) {
        console.log(1, value);
        this.currentYear = value.getFullYear();
        this.currentMonth = value.getMonth() + 1;
      },
    },
  },

  data() {
    return {
      currentMonth: null, // 当前月份
      currentYear: null, // 当前年份
      yearList: [],
    };
  },
  methods: {
    isWeek(value) {
      return value.getDay() === 6 || value.getDay() === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text {
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
::v-deep .el-calendar__header {
  display: none;
}
</style>
