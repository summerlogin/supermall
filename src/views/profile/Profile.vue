<template>
  <scroll :probe-type="3" class="content" @scroll="contentScroll">
    <ul>
      <li>我1</li>
      <li>我2</li>
      <li>我3</li>
      <li>我4</li>
      <li>我5</li>
      <li>我6</li>
      <li>我7</li>
      <li>我8</li>
      <li>我9</li>
      <li>我10</li>
      <li>我11</li>
      <li>我12</li>
      <li>我13</li>
      <li>我14</li>
      <li>我15</li>
      <li>我16</li>
      <li>我17</li>
      <li>我18</li>
      <li>我19</li>
      <li>我20</li>
      <li>我21</li>
      <li>我22</li>
      <li>我23</li>
      <li>我24</li>
      <li>我25</li>
      <li>我26</li>
      <li>我27</li>
      <li>我28</li>
      <li>我29</li>
      <li>我30</li>
      <li>我31</li>
      <li>我32</li>
      <li>我33</li>
      <li>我34</li>
      <li>我35</li>
      <li>我36</li>
      <li>我37</li>
      <li>我38</li>
      <li>我39</li>
      <li>我40</li>
      <li>我41</li>
      <li>我42</li>
      <li>我43</li>
      <li>我44</li>
      <li>我45</li>
      <li>我46</li>
      <li>我47</li>
      <li>我48</li>
      <li>我49</li>
      <li>我50</li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "Profile",
  components: {
    Scroll,
  },
  methods: {
    contentScroll(position) {
      console.log(position)
    },
  },
};
</script>

<style scoped>
.content {
  height: 150px;
  background: red;
  overflow: hidden;
}
</style>
