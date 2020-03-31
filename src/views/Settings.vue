<template>
    <ul class="settings" v-show="settings">
        <li>
            Major holidays
            <label class="toggle">
                <input type="checkbox" name="majorHolidays" v-model="settings.majorHolidays" />
                <span></span>
            </label>
        </li>
        <li>
            Minor holidays
            <label class="toggle">
                <input type="checkbox" name="minorHolidays" v-model="settings.minorHolidays" />
                <span></span>
            </label>
        </li>
        <li>
            Rosh Chodesh 
            <label class="toggle">
                <input type="checkbox" name="roshChodesh" v-model="settings.roshChodesh" />
                <span></span>
            </label>
        </li>
        <li>
            Minor fasts 
            <label class="toggle">
                <input type="checkbox" name="minorFasts" v-model="settings.minorFasts" />
                <span></span>
            </label>
        </li>
        <li>
            Special Shabbatot 
            <label class="toggle">
                <input type="checkbox" name="specialShabbatot" v-model="settings.specialShabbatot" />
                <span></span>
            </label>
        </li>
        <li>
            Modern holidays
            <label class="toggle">
                <input type="checkbox" name="modernHolidays" v-model="settings.modernHolidays" />
                <span></span>
            </label>
        </li>
        <li>
            Parashat ha-Shavuah on Saturday
            <label class="toggle">
                <input type="checkbox" name="parashat" v-model="settings.parashat" />
                <span></span>
            </label>
        </li>
        <li>
            Candle lighting times
            <label class="toggle">
                <input type="checkbox" name="candleLighting" v-model="settings.candleLighting" />
                <span></span>
            </label>            
        </li>
        <li>
            Days of the Omer
            <label class="toggle">
                <input type="checkbox" name="daysOfOmer" v-model="settings.daysOfOmer" />
                <span></span>
            </label>            
        </li>
        <li>
            Diaspora/Israel holidays and Torah readings
            <label class="toggle">
                <input type="checkbox" name="torahReadings" v-model="settings.torahReadings" />
                <span></span>
            </label>            
        </li>
    </ul>
</template>

<script>
export default {
    name: 'settings',
    data: function() {
        return {
            defaultSettings: {
                majorHolidays: false,
                minorHolidays: false,
                roshChodesh: false,
                minorFasts: false,
                specialShabbatot: false,
                modernHolidays: false,
                parashat: false,
                candleLighting: false,
                daysOfOmer: false,
                torahReadings: false
            },
            settings: null
        }
    },
    watch: {
        "settings.majorHolidays": function(val) {
            var settings = { ...this.settings, majorHolidays: val}
            this.updateSettings(settings);
        },
        "settings.minorHolidays": function(val) {
            var settings = { ...this.settings, minorHolidays: val}
            this.updateSettings(settings);
        },
        "settings.roshChodesh": function(val) {
            var settings = { ...this.settings, roshChodesh: val}
            this.updateSettings(settings);
        },
        "settings.minorFasts": function(val) {
            var settings = { ...this.settings, minorFasts: val}
            this.updateSettings(settings);
        },
        "settings.specialShabbatot": function(val) {
            var settings = { ...this.settings, specialShabbatot: val}
            this.updateSettings(settings);
        },
        "settings.modernHolidays": function(val) {
            var settings = { ...this.settings, modernHolidays: val}
            this.updateSettings(settings);
        },
        "settings.parashat": function(val) {
            var settings = { ...this.settings, parashat: val}
            this.updateSettings(settings);
        },
        "settings.candleLighting": function(val) {
            var settings = { ...this.settings, candleLighting: val}
            this.updateSettings(settings);
        },
        "settings.daysOfOmer": function(val) {
            var settings = { ...this.settings, daysOfOmer: val}
            this.updateSettings(settings);
        },
        "settings.torahReadings": function(val) {
            var settings = { ...this.settings, torahReadings: val}
            this.updateSettings(settings);
        }
    },
    created: function() {
        var value = JSON.parse(localStorage.getItem('settings'));
        this.settings = !value || value == "null" ? this.defaultSettings :  value;
    },
    methods: {
        updateSettings: function(value) {
            localStorage.setItem('settings', JSON.stringify(value))
        }
    }
}
</script>

<style scoped>
    .settings {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .settings li {
        padding: 1rem;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
    }

    .settings li:not(:last-child) {
        border-bottom: 1px dashed #ccc;
    }

    .toggle {
        cursor: pointer;
    }

    .toggle input[type=checkbox] {
        display: none;
        visibility: hidden;
        opacity: 0;
    }

    .toggle span {
        width: 35px;
        height: 10px;
        background-color: rgb(109, 150, 227);
        border-radius: 5px;
        display: inline-block;
    }

    .toggle input:checked ~ span {
        background-color: rgb(40, 106, 228);
    }

    .toggle span::after {
        content: '';
        width: 18px;
        height: 18px;
        background-color: rgb(138, 172, 237);
        border-radius: 50%;
        display: block;
        position: relative;
        top: -4px;
        left: 0;
        transition: all .2s;
    }

    .toggle input:checked ~ span::after {
        background-color: rgb(40, 0, 238);
        left: 17px;
    }
</style>