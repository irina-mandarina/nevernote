// NavigationComponent
export default {
    data() {
        return {
            navItems: [
                {ref:"GoToAllNotes", label: "All notes"}, 
                {ref:"GoToMyProfile", label: "My profile"}
            ]
        }
    },
    methods: {
        GoToAllNotes() {
            this.$emit('GoToAllNotes')
        },
        GoToMyProfile() {
            this.$emit('GoToMyProfile')
        }
    },
    template: `
        <nav>
            <ul id="nav-ul">
                <li class="nav-item" v-for="item in navItems" @click="item.ref">{{ item.label }}</li>
            </ul>
        </nav>
    `
}