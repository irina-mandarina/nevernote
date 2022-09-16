// NavigationComponent
export default {
    data() {
        return {
            navItems: [
                {ref:"goToAllNotes", label: "All notes"}, 
                {ref:"goToMyProfile", label: "My profile"}
            ]
        }
    },
    methods: {
        goTo(ref) {
            this.$emit(ref)
        }
    },
    template: `
        <nav>
            <ul id="nav-ul">
                <li class="nav-item" v-for="item in navItems" @click="goTo(item.ref)">{{ item.label }}</li>
            </ul>
        </nav>
    `
}